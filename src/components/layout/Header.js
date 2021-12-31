import { Link } from "react-router-dom";
import MainNavigation from "./MainNavigation";

import classes from './MainNavigation.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Meetups</Link></div>
      <MainNavigation />
    </header>
  );
}

export default Header;
