from fastapi import FastAPI,HTTPException,Depends,APIRouter,status
from pymongo import MongoClient
from datetime import datetime,timedelta
from typing import Optional
from db.db import hostel_collection,user_collection
from db.models import Hostel,Token,User
from passlib.context import CryptContext
import jwt
from db.models import UserLogin,UserSignup
from auth.auth import OAuth2PasswordBearer,OAuth2PasswordRequestForm,authenticate_user,get_current_active_user,create_access_token,ACCESS_TOKEN_EXPIRE_MINUTES,get_password_hash
from datetime import datetime, timedelta, timezone
from typing import Annotated
login_signup=APIRouter(tags=["authentication"]) #creating route for login and signup


@login_signup.post("/token")
def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
) -> Token:
    user = authenticate_user( form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")


@login_signup.get("/users/me/", response_model=User)
def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)],
):
    return current_user


@login_signup.post("/users/create")
def register_user(user: UserSignup):
    # Assuming UserSignup contains necessary user registration data
    # Register the new user
 
        
    # Check if the username already exists
    existing_user = user_collection.find_one({"username": user.username})
    if existing_user:
        # If user already exists, return False to indicate registration failure
        return {"success":False}
    
    # Hash the password before storing it
    hashed_password = get_password_hash(user.password)
    
    # Prepare user data to be inserted into the database
    new_user = {
        "username": user.username,
        "email": user.email,
        "hashed_password": hashed_password,
        # Add any other fields you need for your user model
    }
    
    # Insert the new user into the database
    user_collection.insert_one(new_user)
    
    # Return True to indicate successful registration
    return {"success":True}



@login_signup.get("/users/me/items/")
def read_own_items(
    current_user: Annotated[User, Depends(get_current_active_user)],
):
    return [{"item_id": "Foo", "owner": current_user.username}]



from pydantic import BaseModel, EmailStr, Field

# Define a request model for updating user profiles
class UserUpdate(BaseModel):
    username: str = Field(None, min_length=1, max_length=50)
    email: EmailStr
    password: str = Field(None, min_length=8, max_length=50)

@login_signup.put("/users/me/update")
def update_user_profile(
    profile_data: UserUpdate,  # Request model for updating user profiles
    current_user: User = Depends(get_current_active_user),  # Requires authentication
):
    # Get the current user's username
    username = current_user.username
    
    # Update user profile in the database
    update_fields = {}
    if profile_data.username:
        update_fields["username"] = profile_data.username
    if profile_data.email:
        update_fields["email"] = profile_data.email
    if profile_data.password:
        update_fields["hashed_password"] = get_password_hash(profile_data.password)

    result = user_collection.update_one(
        {"username": username},
        {"$set": update_fields}
    )
    
    # Check if the update was successful
    if result.modified_count == 1:
        return {"success": True, "message": "User profile updated successfully"}
    else:
        return {"success": False, "message": "Failed to update user profile"}
