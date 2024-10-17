import { GoDotFill } from "react-icons/go";
import PropTypes from "prop-types"; // ES6

const Ingredient = ({ ingredient }) => {
  return (
    <li className="flex items-center gap-1">
      <GoDotFill className="text-sm" />
      {ingredient}
    </li>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.string.isRequired,
};
export default Ingredient;
