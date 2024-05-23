from fastapi import APIRouter, Depends, HTTPException
from bson.objectid import ObjectId
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from fastapi import APIRouter,Request,Depends
from db.db import hostel_collection,bookings_collection
from db.models import Hostel,Bookings
from bson.objectid import ObjectId
from db.models import User
from auth.auth import get_current_user,get_current_admin_user
from typing import Annotated
from fastapi.encoders import jsonable_encoder
from bson import json_util
import json
from datetime import datetime, timedelta
from bson import ObjectId 

load_dotenv()

admin_router = APIRouter(tags=["admin"]) #creating route for admin dashboard
#all the operations of admin are below

#admin hostel routes
@admin_router.post("/admin/hostels")
def create_hostel(new_hostel_data: Hostel, current_user: User = Depends(get_current_admin_user)):
    # Assuming new_hostel_data is a Pydantic model representing the structure of a hostel
    new_hostel = hostel_collection.insert_one(new_hostel_data.dict())
    if not new_hostel.inserted_id:
        raise HTTPException(status_code=500, detail="Failed to create hostel")
    return {"message": "Hostel created successfully", "hostel_id": str(new_hostel.inserted_id)}

@admin_router.get("/admin/hostels")
def get_all_hostels(current_user: User = Depends(get_current_admin_user)):
    hostels = list(hostel_collection.find({}))
    return json.loads(json_util.dumps(hostels))

@admin_router.get("/admin/hostels/{hostel_id}")
def get_hostel(hostel_id: str, current_user: User = Depends(get_current_admin_user)):
    hostel = hostel_collection.find_one({"_id": ObjectId(hostel_id)})
    if not hostel:
        raise HTTPException(status_code=404, detail="Hostel not found")
    return json.loads(json_util.dumps(hostel))

@admin_router.put("/admin/hostels/{hostel_id}")
def update_hostel(hostel_id: str, new_hostel_data: Hostel, current_user: User = Depends(get_current_admin_user)):
    updated_hostel = hostel_collection.update_one({"_id": ObjectId(hostel_id)}, {"$set": new_hostel_data.dict()})
    if updated_hostel.modified_count == 0:
        raise HTTPException(status_code=404, detail="Hostel not found")
    return {"message": "Hostel updated successfully"}

@admin_router.delete("/admin/hostels/{hostel_id}")
def delete_hostel(hostel_id: str, current_user: User = Depends(get_current_admin_user)):
    deleted_hostel = hostel_collection.delete_one({"_id": ObjectId(hostel_id)})
    if deleted_hostel.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Hostel not found")
    return {"message": "Hostel deleted successfully"}

#admin booking routes
@admin_router.get("/admin/bookings/day")
def get_bookings_for_day(current_user: User = Depends(get_current_admin_user)):
    # Get bookings for the current day
    today = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
    tomorrow = today + timedelta(days=1)
    bookings = list(bookings_collection.find({"created_at": {"$gte": today, "$lt": tomorrow}}))
    return json.loads(json_util.dumps(bookings))

@admin_router.get("/admin/bookings/week")
def get_bookings_for_week(current_user: User = Depends(get_current_admin_user)):
    # Get bookings for the current week
    start_of_week = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0) - timedelta(days=datetime.now().weekday())
    end_of_week = start_of_week + timedelta(days=7)
    bookings = list(bookings_collection.find({"created_at": {"$gte": start_of_week, "$lt": end_of_week}}))
    return json.loads(json_util.dumps(bookings))

@admin_router.get("/admin/bookings/month")
def get_bookings_for_month(current_user: User = Depends(get_current_admin_user)):
    # Get bookings for the current month
    start_of_month = datetime.now().replace(day=1, hour=0, minute=0, second=0, microsecond=0)
    if start_of_month.month == 12:
        end_of_month = start_of_month.replace(year=start_of_month.year + 1, month=1)
    else:
        end_of_month = start_of_month.replace(month=start_of_month.month + 1)
    bookings = list(bookings_collection.find({"created_at": {"$gte": start_of_month, "$lt": end_of_month}}))
    return json.loads(json_util.dumps(bookings))

# Get total number of hostels
@admin_router.get("/admin/totalhostels", response_model=dict)
def get_total_hostels(current_user: User = Depends(get_current_admin_user)):
    # Return total number of hostels
    total_hostels = hostel_collection.count_documents({})
    return {"totalHostels": total_hostels}


# Get total number of bookings
@admin_router.get("/admin/totalbookings", response_model=dict)
def get_total_bookings(current_user: User = Depends(get_current_admin_user)):
    # Return total number of bookings
    total_bookings = bookings_collection.count_documents({})
    return {"totalBookings": total_bookings}

@admin_router.get("/admin/bookings")
def get_all_bookings(current_user: User = Depends(get_current_admin_user)):
    bookings = list(bookings_collection.find({}))
    return json.loads(json_util.dumps(bookings))

@admin_router.put("/admin/bookings/{booking_id}/accept")
def accept_booking(booking_id: str, current_user: User = Depends(get_current_admin_user)):
    # Accept a booking by updating its status
    result = bookings_collection.update_one(
        {"_id": ObjectId(booking_id)},
        {"$set": {"status": "Accepted"}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Booking not found")
    return {"message": "Booking accepted successfully"}

@admin_router.put("/admin/bookings/{booking_id}/decline")
def decline_booking(booking_id: str, current_user: User = Depends(get_current_admin_user)):
    # Decline a booking by updating its status
    result = bookings_collection.update_one(
        {"_id": ObjectId(booking_id)},
        {"$set": {"status": "Declined"}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Booking not found")
    return {"message": "Booking declined successfully"}