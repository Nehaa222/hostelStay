import pymongo
import os 
from dotenv import load_dotenv

load_dotenv()

mongo_url = os.environ.get('MONGO_URL') 
print(mongo_url)
client=pymongo.MongoClient(host=mongo_url)
db=client["hostel"]
hostel_collection=db["hostels"]
user_collection = db["users"]
beds_collection=db["beds"]