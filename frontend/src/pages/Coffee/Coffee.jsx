import React from "react";
import RecipeCategory from "../Recipes/RecipesCategory.jsx";
import allCoffeeDrinks from "../../data/coffee/coffeeData.js";
import "../Spirits/Spirits.css"; // keep if styling applies

const Coffee = () => {
  // Filter coffee drinks by category "Coffee" (assuming your data uses this)
  const coffeeDrinks = allCoffeeDrinks.filter(
    (drink) => drink.category === "Coffee"
  );

  return (
    <>
      <RecipeCategory
        description={
          <>
            <h1>Coffee Drinks</h1>
            <p>
              Discover our variety of classic coffee drinks including Latte, Cappuccino, Macchiato, and more.
              Perfect for your daily caffeine fix or special treat.
            </p>
          </>
        }
        filters={[]} // No filters yet
        activeFilter={null}
        onFilterChange={() => {}} // no-op
        backLink="/"
        backLinkText="← Back to Home"
        category="coffee"
        data={coffeeDrinks}
        showFilterHeader={false}
      />
    </>
  );
};

export default Coffee;
