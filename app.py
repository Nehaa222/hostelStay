
from fastapi import FastAPI
from Routes.hostels import hostel_router
from Routes.loginsignup import login_signup
from Routes.beds import beds_router
from Routes.admin import admin_router
from Routes.bookings import booking_router
from Routes.facilities import facility_router

from fastapi.middleware.cors import CORSMiddleware
origins = [
    "*",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(hostel_router)
app.include_router(login_signup)
app.include_router(beds_router)
app.include_router(admin_router)
app.include_router(booking_router)
app.include_router(facility_router)

