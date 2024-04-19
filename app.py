
from fastapi import FastAPI
from Routes.hostels import hostel_router
from Routes.loginsignup import login_signup


app = FastAPI()
app.include_router(hostel_router)
app.include_router(login_signup)