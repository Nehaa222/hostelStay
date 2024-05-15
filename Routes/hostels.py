from fastapi import APIRouter,Request,Depends
from db.db import hostel_collection
from db.models import Hostel
from bson.objectid import ObjectId
from db.models import User
from auth.auth import get_current_user,get_current_active_user
from typing import Annotated
from fastapi.encoders import jsonable_encoder
from bson import json_util
import json
hostel_router = APIRouter(tags=["hostels"]) #creating a route for hostels

@hostel_router.get("/hostels")
def get_hostels():
    hostels = list(hostel_collection.find({}))
    return  json.loads(json_util.dumps(hostels))
    

@hostel_router.post("/hostels")
def create_hostel(hostel:Hostel,current_user: Annotated[User, Depends(get_current_active_user)]):
    
    hostels=hostel_collection.insert_one({
        "name":hostel.name,
        "location":hostel.location,
        "phoneNumber":hostel.phoneNumber,
        
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
    
