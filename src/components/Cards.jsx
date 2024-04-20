import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarRateIcon from "@mui/icons-material/StarRate";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AspectRatio from "@mui/joy/AspectRatio";

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
      <section className="flex flex-col gap-5 px-3 mt-3 mb-3">
        <div className="w-64 px-3 py-4 card rounded-xl h-[auto]">
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img src={image} loading="lazy" alt="" className="rounded-2xl" />
          </AspectRatio>
          <h2 className="mt-3 text-3xl font-bold text-center">{name}</h2>
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
