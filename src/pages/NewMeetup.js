import MeetupForm from "../components/meetups/MeetupForm";
import {useNavigate} from "react-router-dom";

function NewMeetup() {
  const navigate = useNavigate();
  function onAddHandler(meetupData) {
      fetch("http://localhost:5000/meetups", {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        console.log("submitted");
        navigate("/");
      });
  }
  return (
    <section>
      <h1>New MeetUp</h1>
      <MeetupForm onAdd={onAddHandler}/>
    </section>
  );
}

export default NewMeetup;
