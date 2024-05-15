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

load_dotenv()

admin_router = APIRouter(tags=["admin"]) #creating route for admin dashboard
#all the operations of admin are below


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



@admin_router.get("/admin/bookings")
def get_all_bookings(current_user: User = Depends(get_current_admin_user)):
    bookings = list(bookings_collection.find({}))
    return json.loads(json_util.dumps(bookings))

@admin_router.get("/admin/bookings/{booking_id}")
def get_booking(booking_id: str, current_user: User = Depends(get_current_admin_user)):
    booking = bookings_collection.find_one({"_id": ObjectId(booking_id)})
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    return json.loads(json_util.dumps(booking))

@admin_router.put("/admin/bookings/{booking_id}")
def update_booking(booking_id: str, new_booking_data: Bookings, current_user: User = Depends(get_current_admin_user)):
    updated_booking = bookings_collection.update_one({"_id": ObjectId(booking_id)}, {"$set": new_booking_data.dict()})
    if updated_booking.modified_count == 0:
        raise HTTPException(status_code=404, detail="Booking not found")
    return {"message": "Booking updated successfully"}

@admin_router.delete("/admin/bookings/{booking_id}")
def delete_booking(booking_id: str, current_user: User = Depends(get_current_admin_user)):
    deleted_booking = bookings_collection.delete_one({"_id": ObjectId(booking_id)})
    if deleted_booking.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Booking not found")
    return {"message": "Booking deleted successfully"}


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
@admin_router.get("/admin/hostels/total")
def get_total_hostels(current_user: User = Depends(get_current_admin_user)):
    total_hostels = hostel_collection.count_documents({})
    return {"total_hostels": total_hostels}

# Get total number of bookings
@admin_router.get("/admin/bookings/total")
def get_total_bookings(current_user: User = Depends(get_current_admin_user)):
    total_bookings = bookings_collection.count_documents({})
    return {"total_bookings": total_bookings}

# Accept booking request
@admin_router.put("/admin/bookings/accept/{booking_id}")
def accept_booking(booking_id: str, current_user: User = Depends(get_current_admin_user)):
    booking = bookings_collection.find_one({"_id": ObjectId(booking_id)})
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")

    # Perform necessary actions to accept the booking, e.g., update status in the database
    # Assuming you have a field named 'status' in your Bookings model, you can update it to 'accepted'
    updated_booking = bookings_collection.update_one({"_id": ObjectId(booking_id)}, {"$set": {"status": "accepted"}})

    return {"message": "Booking accepted successfully"}

# Decline booking request
@admin_router.put("/admin/bookings/decline/{booking_id}")
def decline_booking(booking_id: str, current_user: User = Depends(get_current_admin_user)):
    booking = bookings_collection.find_one({"_id": ObjectId(booking_id)})
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")

    # Perform necessary actions to decline the booking, e.g., update status in the database
    # Assuming you have a field named 'status' in your Bookings model, you can update it to 'declined'
    updated_booking = bookings_collection.update_one({"_id": ObjectId(booking_id)}, {"$set": {"status": "declined"}})

    return {"message": "Booking declined successfully"}