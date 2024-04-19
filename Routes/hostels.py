from fastapi import APIRouter,Request,Depends
from db.db import hostel_collection
from db.models import Hostel
from bson.objectid import ObjectId
from db.models import User
from auth.auth import get_current_user,get_current_active_user
from typing import Annotated
hostel_router = APIRouter(tags=["hostels"])

@hostel_router.get("/hostels")
def get_hostels( current_user: Annotated[User, Depends(get_current_active_user)]):

    hostels=list(hostel_collection.find({},{"_id":0}))
    return hostels
    

@hostel_router.post("/hostels")
def create_hostel(hostel:Hostel,current_user: Annotated[User, Depends(get_current_active_user)]):
    
    hostels=hostel_collection.insert_one({
        "name":hostel.name,
        "address":hostel.address,
        "email":hostel.email,
        "phone":hostel.phone,
        "status":hostel.status
    })
    return {
        "message":"Successfully Created Hostel!"
    }

@hostel_router.delete("/hostel")
def delete_hostel(hostel_id:str):
    hostels=hostel_collection.delete_one({"_id":ObjectId(hostel_id)})
    return {
        "message":"Successfully deleted"
    }
    