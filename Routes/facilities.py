from fastapi import APIRouter, Depends
from bson.objectid import ObjectId
from db.models import Facilities
from db.db import facilities_collection
from db.models import User
from auth.auth import get_current_active_user

facilities_router = APIRouter()

@facilities_router.get("/facilities")
def get_facilities(hostel_id: str):
    facilities = list(facilities_collection.find({"hostel_id": hostel_id}, {"_id": 0}))
    return facilities

@facilities_router.post("/facilities")
def create_facility(facility: Facilities, current_user: User = Depends(get_current_active_user)):
    facility_doc = {
        "hostel_id": facility.hostel_id,
        "facility_name": facility.facility_name
    }
    facilities_collection.insert_one(facility_doc)
    return {"message": "Facility created successfully."}

@facilities_router.delete("/facilities")
def delete_facility(facility_id: str):
    result = facilities_collection.delete_one({"_id": ObjectId(facility_id)})
    if result.deleted_count == 1:
        return {"message": "Facility deleted successfully."}
    else:
        return {"message": "Facility not found."}

# Update route if needed
@facilities_router.put("/facilities")
def update_facility(facility_id: str, facility: Facilities):
    # Implement update logic here
    pass

# Additional routes as needed
