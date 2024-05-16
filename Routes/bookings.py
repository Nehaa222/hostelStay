from fastapi import APIRouter, Depends
from db.db import bookings_collection
from db.models import Bookings
from db.models import User
from auth.auth import get_current_active_user
from typing import Annotated
from bson import ObjectId
import json
from fastapi.encoders import jsonable_encoder

booking_router = APIRouter(tags=["bookings"])


@booking_router.post("/bookings")
def create_booking(booking: Bookings, current_user: Annotated[User, Depends(get_current_active_user)]):
    new_booking = bookings_collection.insert_one({
        "name": booking.name,
        "hostelName": booking.hostelName,
        "selectedBed": booking.selectedBed,
        
    })
    return {"message": "Booking created successfully"}

@booking_router.get("/bookings")
def get_bookings():
    bookings = list(bookings_collection.find({}))
    return jsonable_encoder(bookings)

@booking_router.delete("/bookings/{booking_id}")
def delete_booking(booking_id: str):
    booking = bookings_collection.delete_one({"_id": ObjectId(booking_id)})
    if booking.deleted_count == 1:
        return {"message": "Booking deleted successfully"}
    else:
        return {"message": "Booking not found"}
