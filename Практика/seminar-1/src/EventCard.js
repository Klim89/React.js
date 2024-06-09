function EventCard({ name, date, place }) {
    return (
        <div>
          <h2 style={{ background: "green" }} className="heading">
            {name} пройдет {date} в {place}
          </h2>
        </div>
      );
}

export default EventCard;