import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import cx from "classnames";
import styles from "./Navbar.module.css";
import menuIcon from "../../assets/icon-menu.svg";

class Navbar extends Component {
  state = {
    toggle: false
  };

  navToggle = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

  render() {
    const navClass = cx(styles.navItems, {
      [styles.show]: this.state.toggle
    });

    return (
      <div className={styles.nav}>
        <div className={styles.brand}>Moviees</div>
        <div className={styles.navToggler}>
          <img src={menuIcon} alt="" onClick={this.navToggle} />
        </div>
        <div className={navClass}>
          <NavLink
            to="/movies/popular"
            className={styles.navItem}
            activeClassName={styles.active}
          >
            Popular
          </NavLink>
          <NavLink
            to="/movies/top_rated"
            className={styles.navItem}
            activeClassName={styles.active}
          >
            Top rated
          </NavLink>
          <NavLink
            to="/movies/saved"
            className={styles.navItem}
            activeClassName={styles.active}
          >
            Saved
          </NavLink>
          <Link
            to="/logout"
            className={styles.navItem}
            activeClassName={styles.active}
          >
            Logout
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
