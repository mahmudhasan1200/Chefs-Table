import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import WantToCook from "./WantToCook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [toCooks, setToCooks] = useState([]);
  const [SelectedToCook, setSelectedToCook] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantToCookButton = (recipe) => {
    const { recipe_id, recipe_name } = recipe;
    const alreadyExist = toCooks.some((item) => item.recipe_id === recipe_id);

    if (alreadyExist) {
      toast.info(`${recipe_name} is already in your "Want to Cook" list!`);
    } else {
      setToCooks([...toCooks, recipe]);
      toast.success(`${recipe_name} added to "Want to Cook" list!`);
    }
  };

  const handlePreparingButton = (recipe) => {
    const alreadySelected = SelectedToCook.some(
      (item) => item.recipe_id === recipe.recipe_id
    );
    if (!alreadySelected) {
      setSelectedToCook([...SelectedToCook, recipe]);
      const updateToCooks = toCooks.filter(
        (item) => item.recipe_id !== recipe.recipe_id
      );
      setToCooks(updateToCooks);
    }
  };

  const totalTime = SelectedToCook.reduce(
    (total, item) => total + parseInt(item.preparing_time, 10),
    0
  );

  const totalCalories = SelectedToCook.reduce(
    (total, item) => total + parseInt(item.calories, 10),
    0
  );

  return (
    <div>
      <ToastContainer />

      <div className="flex flex-col items-center">
        <h1 className="text-[#150B2B] text-[40px] font-semibold text-center">
          Our Recipes
        </h1>
        <p className="w-[820px] text-[#150b2b99] text-base mt-6 text-center mb-12">
          Explore a variety of quick, flavorful meals and indulgent treats. From
          vibrant salads to hearty mains, find the perfect recipe to bring joy
          to your kitchen.
        </p>
      </div>

      <div className="flex gap-6">
        <div className="grid grid-cols-2 w-[785px] gap-4">
          {recipes.map((recipe, idx) => (
            <Recipe
              key={idx} // Use a unique id instead of idx
              recipe={recipe}
              handleWantToCookButton={handleWantToCookButton}
            />
          ))}
        </div>
        <div>
          <WantToCook
            handlePreparingButton={handlePreparingButton}
            toCooks={toCooks}
            SelectedToCook={SelectedToCook}
            totalTime={totalTime}
            totalCalories={totalCalories}
          />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
