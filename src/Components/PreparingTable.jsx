import PropTypes from "prop-types";

const PreparingTable = ({ SelectedToCook }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = SelectedToCook;
  return (
    <tr className="bg-[#28282808]">
      <td className="py-3 px-4">{recipe_id}</td>
      <td className="py-3">{recipe_name}</td>
      <td className="py-3 px-4">{preparing_time}</td>
      <td className="py-3 px-4">{calories}</td>
    </tr>
  );
};

PreparingTable.propTypes = {
  SelectedToCook: PropTypes.object,
};
export default PreparingTable;
