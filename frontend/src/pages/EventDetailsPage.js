import { useParams } from "react-router-dom";

export const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Event Details</h1>
      <p>Event Id: {params.eventId}</p>
    </>
  );
};
