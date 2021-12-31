import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from "react";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetUps, setMeetUps] = useState([]);

  function fetchData() {
    fetch("http://localhost:5000/meetups").then((response) => {
      return response.json();
    }).then(data => {
      setIsLoading(false);
      setMeetUps(data);
    });
  }

  useEffect(() => {
    fetchData();
  }, [isLoading]);

  if(isLoading) {
    return (<section>
      Loading....
    </section>)
  }
    
  return (
    <section>
    <h1>All Meetups</h1>
    <MeetupList meetups = {meetUps}/>
  </section>
  );
}

export default AllMeetups;
