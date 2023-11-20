import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export const EditEventPage = () => {
  const data = useRouteLoaderData('event-details')

 
  return (
    <>
      <EventForm event={data.event} method='PATCH'/>
    </>
  );
};
