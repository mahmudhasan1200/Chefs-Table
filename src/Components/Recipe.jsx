import { CiClock2 } from "react-icons/ci";
import { VscFlame } from "react-icons/vsc";
import Ingredient from "./Ingredient";
import PropTypes from "prop-types"; // ES6

const Recipe = ({ recipe, handleWantToCookButton }) => {
  const {
    recipe_name,
    calories,
    ingredients,
    preparing_time,
    short_description,
    recipe_image,
  } = recipe;

  return (
    <div>
      <div className="flex flex-col items-center">
        {/* recipe card  */}
        <div className="card bg-base-100 border border-[#28282833] w-96 shadow-xl p-6 ">
          <figure className="h-[200px]">
            <img src={recipe_image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="">
            <h2 className="text-[#282828] text-xl mb-4 mt-6">{recipe_name}</h2>
            <p className="text-[#878787] mb-4">{short_description}</p>
            <hr className="mb-6" />
            <h4 className="text-[#282828] text-lg font-medium mb-4">
              Ingredients: {ingredients.length}
            </h4>
            <ul className="text-[#878787] text-lg">
              {ingredients.map((ingredient, idx) => (
                <Ingredient key={idx} ingredient={ingredient}></Ingredient>
              ))}
            </ul>
            <hr className="mt-4 mb-6" />
            <div className="flex gap-4">
              <p className="text-[#282828cc] flex items-center gap-2">
                <span className="">
                  <CiClock2 className="text-2xl" />
                </span>
                {preparing_time}
              </p>
              <p className="text-[#282828cc] flex items-center gap-2">
                <span className="">
                  <VscFlame className="text-2xl" />
                </span>
                {calories}
              </p>
            </div>
            <button
              onClick={() => handleWantToCookButton(recipe)}
              className="bg-[#0BE58A] px-6 py-3 rounded-[50px] text-[#150B2B] text-lg font-medium mt-8"
            >
              Want to cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCookButton: PropTypes.func,
};
export default Recipe;
