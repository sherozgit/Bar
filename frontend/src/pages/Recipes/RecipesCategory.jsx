import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RecipesCategory.css";
import classicCocktails from "../../data/cocktails/ClassicCocktails";
import signatureCocktails from "../../data/cocktails/SignatureCocktails";

const RecipesCategory = ({
  description,
  backLink,
  backLinkText,
  filters,
  activeFilter,
  onFilterChange,
  category,
  data,
  showFilterHeader = true, // ✅ new prop with default value
}) => {
  const MAX_VISIBLE = 6;
  const [visibleFilters, setVisibleFilters] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setVisibleFilters(filters.slice(0, MAX_VISIBLE));
  }, [filters]);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleFilterSelect = (selectedFilter) => {
    if (visibleFilters.some((f) => f.value === selectedFilter.value)) {
      onFilterChange(selectedFilter.value);
      setShowDropdown(false);
      return;
    }

    const updatedFilters = [...visibleFilters];
    updatedFilters[MAX_VISIBLE - 1] = selectedFilter;
    setVisibleFilters(updatedFilters);
    onFilterChange(selectedFilter.value);
    setShowDropdown(false);
  };

  const allCocktails = data || [...classicCocktails, ...signatureCocktails];

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
        {showFilterHeader && (
          <p>
            Showing recipes for:{" "}
            <strong>
              {activeFilter === "all" ? "All Cocktails" : activeFilter}
            </strong>
          </p>
        )}

        <div className="recipe-grid">
          {filteredCocktails.map((cocktail) => {
            // Determine path prefix based on category
            const categoryPath = cocktail.category === "Classic Cocktails" ? "classic-cocktails" : "signature";

            return (
              <Link
                to={`/${categoryPath}/${cocktail.id}`}
                key={cocktail.id}
                className="recipe-card-link"
              >
                <div className="recipe-card">
                  {/* Updated image src */}
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
