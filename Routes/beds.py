from fastapi import FastAPI,HTTPException,Depends,APIRouter,status
from pymongo import MongoClient
from datetime import datetime,timedelta
from typing import Optional
from db.db import beds_collection,user_collection
from db.models import Hostel,Token,User
from db.models import Beds
from passlib.context import CryptContext
import jwt
from db.models import UserLogin,UserSignup
from auth.auth import OAuth2PasswordBearer,OAuth2PasswordRequestForm,authenticate_user,get_current_active_user,create_access_token,ACCESS_TOKEN_EXPIRE_MINUTES,get_password_hash
from datetime import datetime, timedelta, timezone
from typing import Annotated
from bson.objectid import ObjectId

beds_router=APIRouter() #creating route for beds

@beds_router.get("/beds")
def get_beds(hostel_id:str):
    beds=list(beds_collection.find({"hostel_id":hostel_id},{"_id":0}))
    return beds
    

@beds_router.post("/beds")
def create_beds(bed:Beds,current_user: Annotated[User, Depends(get_current_active_user)]):
    
    beds=beds_collection.insert_one({
        "name":bed.bedType,
        "status":bed.status,
        "hostel_id":bed.hostel_id
    })
    return {
        "message":"Successfully Created bed!"
    }

@beds_router.delete("/beds")
def delete_beds(bed_id:str):
    hostels=beds_collection.delete_one({"_id":ObjectId(bed_id)})
    return {
        "message":"Successfully deleted"
    }