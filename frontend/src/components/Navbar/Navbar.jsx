import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    recipes: false,
    spirits: false,
    beerWine: false,
  });

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className={`left-container ${isOpen ? "hidden-logo" : ""}`}>
          {!isOpen && (
            <Link to="/" className="logo-link">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          )}
        </div>

        <ul className="nav-links">
          {/* Recipes */}
          <li
            className="dropdown"
            onMouseEnter={() =>
              setDropdownOpen({ ...dropdownOpen, recipes: true })
            }
            onMouseLeave={() =>
              setDropdownOpen({ ...dropdownOpen, recipes: false })
            }
          >
            <Link to="/recipes" className="dropdown-toggle">
              Recipes
            </Link>
            {dropdownOpen.recipes && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/recipes/by-spirit">By Spirit</Link>
                </li>
                <li>
                  <Link to="/recipes/cocktail-type">Cocktail Type</Link>
                </li>
                <li>
                  <Link to="/recipes/occasion">Occasion</Link>
                </li>
                <li>
                  <Link to="/recipes/flavor-profile">Flavor Profile</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Spirits */}
          <li
            className="dropdown"
            onMouseEnter={() =>
              setDropdownOpen({ ...dropdownOpen, spirits: true })
            }
            onMouseLeave={() =>
              setDropdownOpen({ ...dropdownOpen, spirits: false })
            }
          >
            <Link to="/spirits" className="dropdown-toggle">
              Spirits
            </Link>
            {dropdownOpen.spirits && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/spirits/bourbon">Bourbon</Link>
                </li>
                <li>
                  <Link to="/spirits/brandy">Brandy</Link>
                </li>
                <li>
                  <Link to="/spirits/gin">Gin</Link>
                </li>
                <li>
                  <Link to="/spirits/liqueur">Liqueur</Link>
                </li>
                <li>
                  <Link to="/spirits/rum">Rum</Link>
                </li>
                <li>
                  <Link to="/spirits/rye-whiskey">Rye Whiskey</Link>
                </li>
                <li>
                  <Link to="/spirits/scotch">Scotch</Link>
                </li>
                <li>
                  <Link to="/spirits/other-whiskey">Other Whiskey</Link>
                </li>
                <li>
                  <Link to="/spirits/tequila-mezcal">Tequila & Mezcal</Link>
                </li>
                <li>
                  <Link to="/spirits/vermouth">Vermouth</Link>
                </li>
                <li>
                  <Link to="/spirits/vodka">Vodka</Link>
                </li>
                <li>
                  <Link to="/spirits/more-spirits">More Spirits</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Coffee */}
          <li>
            <Link to="/coffee">Coffee</Link>
          </li>

          {/* About */}
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        <div className="right-container">
          <button className="hamburger" onClick={toggleSidebar}>
            &#9776;
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" onClick={closeSidebar}>
            <img src={logo} alt="Logo" className="sidebar-logo" />
          </Link>
          <button className="close-btn" onClick={closeSidebar}>
            &times;
          </button>
        </div>

        <ul>
          <li>
            <Link to="/recipes" onClick={closeSidebar}>
              Recipes
            </Link>
            <ul>
              <li>
                <Link to="/recipes/by-spirit" onClick={closeSidebar}>
                  By Spirit
                </Link>
              </li>
              <li>
                <Link to="/recipes/cocktail-type" onClick={closeSidebar}>
                  Cocktail Type
                </Link>
              </li>
              <li>
                <Link to="/recipes/occasion" onClick={closeSidebar}>
                  Occasion
                </Link>
              </li>
              <li>
                <Link to="/recipes/flavor-profile" onClick={closeSidebar}>
                  Flavor Profile
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/spirits" onClick={closeSidebar}>
              Spirits
            </Link>
            <ul>
              <li>
                <Link to="/spirits/bourbon" onClick={closeSidebar}>
                  Bourbon
                </Link>
              </li>
              <li>
                <Link to="/spirits/brandy" onClick={closeSidebar}>
                  Brandy
                </Link>
              </li>
              <li>
                <Link to="/spirits/gin" onClick={closeSidebar}>
                  Gin
                </Link>
              </li>
              <li>
                <Link to="/spirits/liqueur" onClick={closeSidebar}>
                  Liqueur
                </Link>
              </li>
              <li>
                <Link to="/spirits/rum" onClick={closeSidebar}>
                  Rum
                </Link>
              </li>
              <li>
                <Link to="/spirits/rye-whiskey" onClick={closeSidebar}>
                  Rye Whiskey
                </Link>
              </li>
              <li>
                <Link to="/spirits/scotch" onClick={closeSidebar}>
                  Scotch
                </Link>
              </li>
              <li>
                <Link to="/spirits/other-whiskey" onClick={closeSidebar}>
                  Other Whiskey
                </Link>
              </li>
              <li>
                <Link to="/spirits/tequila-mezcal" onClick={closeSidebar}>
                  Tequila & Mezcal
                </Link>
              </li>
              <li>
                <Link to="/spirits/vermouth" onClick={closeSidebar}>
                  Vermouth
                </Link>
              </li>
              <li>
                <Link to="/spirits/vodka" onClick={closeSidebar}>
                  Vodka
                </Link>
              </li>
              <li>
                <Link to="/spirits/more-spirits" onClick={closeSidebar}>
                  More Spirits
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/coffee" onClick={closeSidebar}>
              Coffee
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={closeSidebar}>
              About Us
            </Link>
          </li>
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </div>
  );
};

export default Navbar;
