import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCategory from "./RecipesCategory.jsx";
import { fetchRecipes } from '../../api/recipesApi';

const RecipesCategoryWrapper = () => {
  const { category } = useParams();
  const [activeFilter, setActiveFilter] = useState("all");
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleFilterChange = (filterValue) => {
    setActiveFilter(filterValue);
  };

  useEffect(() => {
    setLoading(true);
    fetchRecipes({ category }) // fetch data from backend with optional query
      .then((data) => {
        setCocktails(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
        setError("Failed to fetch recipes");
        setLoading(false);
      });
  }, [category]);

  const commonProps = {
    backLink: "/recipes",
    backLinkText: "← Cocktail & Other Recipes",
    activeFilter,
    onFilterChange: handleFilterChange,
    category,
    data: cocktails, // pass fetched data
    showFilterHeader: true,
  };

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;

  // === SPIRIT CATEGORY ===
  if (category === "by-spirit") {
    return (
      <RecipeCategory
        description={
          <>
            <h1>Cocktail & Other Recipes</h1>
            <p>
              Whether you want the smoky, sweet notes of whiskey or a more
              subtle base of vodka in your cocktail, find the recipe you're
              searching for by spirit.
            </p>
          </>
        }
        filters={[
          { label: "All", value: "all" },
          { label: "Bourbon Cocktails", value: "Bourbon Cocktails" },
          { label: "Vodka Cocktails", value: "Vodka Cocktails" },
          { label: "Rum Cocktails", value: "Rum Cocktails" },
          { label: "Scotch Cocktails", value: "Scotch Cocktails" },
          { label: "Other Whiskey Cocktails", value: "Other Whiskey Cocktails" },
          { label: "Tequila & Mezcal Cocktails", value: "Tequila & Mezcal Cocktails" },
          { label: "Cognac & Other Brandy Cocktails", value: "Cognac & Other Brandy Cocktails" },
          { label: "Gin Cocktails", value: "Gin Cocktails" },
          { label: "Other Cocktails", value: "Other Cocktails" },
        ]}
        {...commonProps}
      />
    );
  }

  // === OCCASION CATEGORY ===
  if (category === "occasion") {
    return (
      <RecipeCategory
        description={
          <>
            <h1>Recipes by Occasion</h1>
            <p>
              Whether it's to celebrate a holiday, embrace a season or enjoy
              the time of day, we have a drink for every occasion.
            </p>
          </>
        }
        filters={[
          { label: "All", value: "all" },
          { label: "New Year's", value: "New Year's" },
          { label: "Valentine's Day", value: "Valentine's Day" },
          { label: "Halloween", value: "Halloween" },
          { label: "Thanksgiving", value: "Thanksgiving" },
          { label: "Christmas", value: "Christmas" },
          { label: "Spring", value: "Spring" },
          { label: "Summer", value: "Summer" },
          { label: "Winter", value: "Winter" },
          { label: "Brunch", value: "Brunch" },
          { label: "Aperitif & Digestif", value: "Aperitif & Digestif" },
          { label: "Nightcap", value: "Nightcap" },
        ]}
        {...commonProps}
      />
    );
  }

  // === FLAVOR PROFILE CATEGORY ===
  if (category === "flavor-profile") {
    return (
      <RecipeCategory
        description={
          <>
            <h1>Recipes by Flavor Profile</h1>
            <p>
              Whether you like it sweet, sour, savory or bitter — we’ve got a
              cocktail that fits your palate.
            </p>
          </>
        }
        filters={[
          { label: "All", value: "all" },
          { label: "Bitter", value: "Bitter" },
          { label: "Sweet", value: "Sweet" },
          { label: "Savory", value: "Savory" },
          { label: "Sour", value: "Sour" },
          { label: "Spicy", value: "Spicy" },
          { label: "Fruity", value: "Fruity" },
          { label: "Smoky", value: "Smoky" },
          { label: "Herbaceous", value: "Herbaceous" },
        ]}
        {...commonProps}
      />
    );
  }

  // === COCKTAIL TYPE CATEGORY ===
  if (category === "cocktail-type") {
    return (
      <RecipeCategory
        description={
          <>
            <h1>Recipes by Type</h1>
            <p>
              From pre-Prohibition classics, punches and modern riffs to frozen drinks and Tiki standards, 
              there's a type of drink to fit your mood and palate.
            </p>
          </>
        }
        filters={[
          { label: "All", value: "all" },
          { label: "Classic", value: "Classic" },
          { label: "Modern Classic", value: "Modern Classic" },
          { label: "Tiki & Tropical", value: "Tropical Cocktails" },
          { label: "Coffee & Dessert", value: "Dessert Cocktails" },
          { label: "Shots & Shooters", value: "Shots & Shooters" },
          { label: "Punches", value: "Punches" },
          { label: "Nonalcoholic", value: "Nonalcoholic" },
        ]}
        {...commonProps}
      />
    );
  }

  // === UNKNOWN CATEGORY ===
  return <p>Category "{category}" not found.</p>;
};

export default RecipesCategoryWrapper;
