from pydantic import BaseModel


class Hostel(BaseModel):
    name : str
    address: str
    email : str 
    phone : str 
    status : str 
    
    