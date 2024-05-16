from fastapi import APIRouter, Depends, HTTPException
from db.db import facilities_collection
from db.models import Facilities
from db.models import User
from auth.auth import get_current_active_user
from typing import Annotated
from bson import ObjectId
from fastapi.encoders import jsonable_encoder

facility_router = APIRouter(tags=["facilities"])

@facility_router.post("/facilities")
def create_facility(facility: Facilities, current_user: Annotated[User, Depends(get_current_active_user)]):
    new_facility = facilities_collection.insert_one({
        "hostel_id": facility.hostel_id,
        "facility_name": facility.facility_name,

    })
    return {"message": "Facility created successfully"}

@facility_router.get("/facilities")
def get_facilities():
    facilities = list(facilities_collection.find({}))
    return jsonable_encoder(facilities)

@facility_router.delete("/facilities/{facility_id}")
def delete_facility(facility_id: str):
    facility = facilities_collection.delete_one({"_id": ObjectId(facility_id)})
    if facility.deleted_count == 1:
        return {"message": "Facility deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="Facility not found")
