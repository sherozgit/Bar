import React from "react";

import Home from "./pages/Home/Home.jsx";
import Recipes from "./pages/Recipes/Recipes.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Spirits from "./pages/Spirits/Spirits.jsx"; // Assuming you have a Spirits component
import RootLayout from "./layout/RootLayout.jsx";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import ClassicCocktailsPage from "./pages/ClassicCocktails/ClassicCocktails.jsx";
import CocktailDetail from "./pages/CocktailDetail/CocktailDetail.jsx"; // Assuming you have a CocktailDetail component
import SignatureCocktailsPage from "./pages/SignatureCocktails/SignatureCocktails.jsx";
import PrivacyPolicy from "./pages/PrivcacyPolicy/PrivacyPolicy.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import RecipesCategoryWrapper from "./pages/Recipes/RecipesCategoryWrapper.jsx"; // Import wrapper
// import CocktailType from "./pages/Recipes/CocktailType.jsx"; // Assuming you have a CocktailType component
import SpiritCategoryPage from "./pages/Spirits/SpiritCategoryPage.jsx";
// import BeerAndWine from "./pages/BeerAndWine/BeerAndWine.jsx";
import Coffee from "./pages/Coffee/Coffee.jsx"; // Import Coffee page
import CoffeeCategoryWrapper from "./pages/Coffee/CoffeeCategoryWrapper.jsx";
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
            <Route path="recipes" element={<Recipes />} /> 
            <Route path="about" element={<AboutUs />} />  
            <Route path="spirits" element={<Spirits />} />
            <Route path="slideshows/classic-cocktails" element={<ClassicCocktailsPage />} />
            <Route path="classic-cocktails/:id" element={<CocktailDetail />} />
            <Route path="signature" element={<SignatureCocktailsPage />} />
            <Route path="signature/:id" element={<CocktailDetail />} />
            <Route path="contact" element={<Contact />} /> 
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="recipes/:category" element={<RecipesCategoryWrapper />} />
            <Route path="coffee" element={<Coffee />} />
            {/* <Route path="/recipes/cocktail-type" element={<CocktailType />} /> */}
            {/* <Route path=":spirit" element={<SpiritsCategoryWrapper />} /> */}
            {/* <Route path=":spirit" element={<SpiritCategoryPage />} /> */}
            <Route path="spirits/:spirit" element={<SpiritCategoryPage />} /> {/* ✅ Add this */}
            <Route path="coffee/:category" element={<CoffeeCategoryWrapper />} />
      </Route>
    )  

  )

  return (
    <RouterProvider router={router} />
  )
}
export default App;