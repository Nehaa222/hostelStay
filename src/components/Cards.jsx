import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarRateIcon from "@mui/icons-material/StarRate";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export default function Cards({
  name,
  location,
  rating,
  price,
  availability,
  image,
}) {
  return (
    <>
      <section className="flex flex-col gap-5 mt-3 mb-3 px-3">
        <div className="card rounded-xl w-64 h-96  px-3 py-3">
          <img
            src={image}
            alt="Boys hostel image"
            className="align-center w-auto h-44 rounded-3xl ml-10"
          />
          <h2 className="text-center mt-3 text-3xl font-bold">{name}</h2>
          <div className="mt-8 text-lg font-semibold">
            <p className="flex items-center gap-2">
              <LocationOnIcon />
              Location: {location}
            </p>
            <p className="flex items-center gap-2">
              <StarRateIcon />
              Rating: {rating}
            </p>
            <p className="flex items-center gap-2">
              <AttachMoneyIcon />
              Price: {price}
            </p>
            <p className="flex items-center gap-2">
              <EventAvailableIcon />
              Availability: {availability}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
