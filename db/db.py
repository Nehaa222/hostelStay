import pymongo

client=pymongo.MongoClient()
db=client["hostel"]
hostel_collection=db["hostels"]
