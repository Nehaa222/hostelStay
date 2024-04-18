
from fastapi import FastAPI
from Routes.hostels import hostel_router

app = FastAPI()

app.include_router(hostel_router)