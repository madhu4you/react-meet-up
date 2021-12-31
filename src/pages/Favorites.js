import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
  const favCtx = useContext(FavoritesContext);
  let content = <p>You got no favorites yet. Start adding some?</p>;
  if(favCtx.totalFavorites !== 0) {
    content = <MeetupList meetup={favCtx.favorites} />
  }

    return (
      <section>
        <h1>My Favorites</h1>
        {content}
      </section>
    );
  }
  
  export default Favorites;
  