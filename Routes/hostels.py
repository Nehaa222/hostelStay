from fastapi import APIRouter
from db.db import hostel_collection
from db.models import Hostel
hostel_router = APIRouter()

@hostel_router.get("/hostels")
def get_hostels():
    hostels=list(hostel_collection.find({},{"_id":0}))
    return hostels
    

@hostel_router.post("/hostels")
def create_hostel(hostel:Hostel):
    
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
    
