import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const favCtx = useContext(FavoritesContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">All Meetup</Link>
        </li>
        <li>
          <Link to="/new">New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites <span className={classes.badge}>{favCtx.totalFavorites}</span></Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
