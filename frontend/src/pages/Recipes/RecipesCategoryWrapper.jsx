import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCategory from "./RecipesCategory.jsx";

const RecipesCategoryWrapper = () => {
  const { category } = useParams();
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filterValue) => {
    setActiveFilter(filterValue);
  };

  const commonProps = {
    backLink: "/recipes",
    backLinkText: "← Cocktail & Other Recipes",
    activeFilter,
    onFilterChange: handleFilterChange,
    category, // ✅ Add this so filtering logic knows the type
  };

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
            <p>
              With a huge number of spirits in a constantly evolving market,
              it's hard to figure out what to drink and how to drink it. Find
              out what's new in the spirits world, including new bottles to try
              and great ways to drink them.
            </p>
          </>
        }
        filters={[
          { label: "All", value: "all" },
          { label: "Bourbon Cocktails", value: "Bourbon Cocktails" },
          { label: "Vodka Cocktails", value: "Vodka Cocktails" },
          { label: "Rum Cocktails", value: "Rum Cocktails" },
          { label: "Scotch Cocktails", value: "Scotch Cocktails" },
          { label: "Rye Whiskey Cocktails", value: "Rye Whiskey Cocktails" },
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
              <a href="/recipes" className="back-link-inline">
                ← Cocktail & Other Recipes
              </a>
            </p>
            <p>
              Whether it's to celebrate a holiday, embrace a season or enjoy
              the time of day, we have a drink for every occasion. From New
              Year's Eve sparklers and winter warmers to aperitifs and
              nightcaps, there's a drink to serve every need. Find your perfect
              match and start mixing.
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
              <a href="/recipes">← Cocktail & Other Recipes</a>
            </p>
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
              there's a type of drink to fit your mood and palate. Check out all the drink types you can make and start mixing.
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
