import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RecipesCategory.css";
import { fetchRecipes } from '../../api/recipesApi';

const RecipesCategory = ({
  description,
  backLink,
  backLinkText,
  filters,
  activeFilter,
  onFilterChange,
  category,
  showFilterHeader = true,
}) => {
  const MAX_VISIBLE = 6;
  const [visibleFilters, setVisibleFilters] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [allCocktails, setAllCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setVisibleFilters(filters.slice(0, MAX_VISIBLE));
  }, [filters]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchRecipes(category);
      setAllCocktails(data);
      setLoading(false);
    };
    loadData();
  }, [category]);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleFilterSelect = (selectedFilter) => {
    onFilterChange(selectedFilter.value);
    setShowDropdown(false);
  };

  const filteredCocktails = allCocktails.filter((cocktail) => {
    if (activeFilter === "all") return true;

    if (category === "by-spirit" || category === "cocktail-type") {
      return cocktail.subcategory === activeFilter;
    }

    if (category === "occasion") {
      return cocktail.occasions?.includes(activeFilter);
    }

    if (category === "flavor-profile") {
      return cocktail.flavorProfiles?.includes(activeFilter);
    }

    return true;
  });

  const remainingFilters = filters.filter(
    (f) => !visibleFilters.some((v) => v.value === f.value)
  );

  if (loading) {
    return (
      <div className="recipes-category">
        {backLink && (
          <p>
            <a href={backLink} className="back-link">{backLinkText}</a>
          </p>
        )}

        <div className="description">{description}</div>

        {showFilterHeader && visibleFilters.length > 0 && (
          <div className="filters">
            <h3>Showing Recipes for:</h3>
            <ul className="filter-list">
              {visibleFilters.map((filter) => (
                <li key={filter.value} className={filter.value === activeFilter ? "active" : ""}>
                  <button>{filter.label}</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="results">
          <div className="recipe-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="recipe-card skeleton-card">
                <div className="skeleton skeleton-image"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="recipes-category">
      {backLink && (
        <p>
          <a href={backLink} className="back-link">
            {backLinkText}
          </a>
        </p>
      )}

      <div className="description">{description}</div>

      {showFilterHeader && visibleFilters.length > 0 && (
        <div className="filters">
          <h3>Showing Recipes for:</h3>
          <ul className="filter-list">
            {visibleFilters.map((filter) => (
              <li
                key={filter.value}
                className={filter.value === activeFilter ? "active" : ""}
              >
                <button onClick={() => onFilterChange(filter.value)}>
                  {filter.label}
                </button>
              </li>
            ))}

            {remainingFilters.length > 0 && (
              <li className="dropdown-wrapper">
                <button className="more-filters-btn" onClick={toggleDropdown}>
                  {showDropdown ? "Less ▲" : "More ▼"}
                </button>

                {showDropdown && (
                  <ul className="dropdown-menu">
                    {remainingFilters.map((filter) => (
                      <li key={filter.value}>
                        <button onClick={() => handleFilterSelect(filter)}>
                          {filter.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="results">
        <div className="recipe-grid">
          {filteredCocktails.map((cocktail) => {
            const categoryPath =
              cocktail.category === "Classic Cocktails" ? "classic-cocktails" : "signature";

            return (
              <Link
                to={`/${categoryPath}/${cocktail.id}`}
                key={cocktail.id}
                className="recipe-card-link"
              >
                <div className="recipe-card">
                  <img src={`/images/${cocktail.image}`} alt={cocktail.name} />
                  <h4>{cocktail.name}</h4>
                  <p className="subcategory">{cocktail.subcategory}</p>
                  <p className="rating">⭐ {cocktail.rating || "N/A"}</p>
                </div>
              </Link>
            );
          })}

          {filteredCocktails.length === 0 && <p>No cocktails found.</p>}
        </div>
      </div>
    </div>
  );
};

export default RecipesCategory;
