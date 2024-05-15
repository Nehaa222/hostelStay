from pydantic import BaseModel
from passlib.context import CryptContext
from typing import Optional
#data model for users signup
class UserSignup(BaseModel):
    username:str
    password:str
    email:str

#data model for user login
class UserLogin(BaseModel):
    username:str
    password:str

#data model for hostel
class Hostel(BaseModel):
    name : str
    location:str
    phoneNumber:str

#data model for rooms 
class Rooms(BaseModel):
    hostel_id:str
    room_number:int
    floor:int

#data model for user
class User(BaseModel):
    username:str
    email:str
    
#data model for user in db
class UserInDB(User):
    hashed_password:str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


#data model for beds
class Beds(BaseModel):
    bedType:str
    hostel_id: str
    Price:str
    availableBeds:str
    status: Optional[str] = "available"

class Facilities(BaseModel):
    hostel_id:str
    facility_name:str

class Bookings(BaseModel):
    booking_id:str
    name:str
    hostelName:str
    selectedBed:str
    
