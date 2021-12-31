import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favCtx = useContext(FavoritesContext);
  const itemIsFav = favCtx.itemIsFavorite(props.id);
  function toggleFavStatusHandler(){
    if(itemIsFav) {
      favCtx.removeFavorite(props.id);
    }
    else {
      favCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
      console.log(favCtx.favorites);
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>
            {itemIsFav ? 'Remove from Favorites' : 'Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
