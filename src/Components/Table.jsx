import PropTypes from "prop-types"; // ES6

const Table = ({ toCook, handlePreparingButton }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = toCook;
  return (
    <tr className="bg-[#28282808]">
      <td className="py-3 px-4">{recipe_id}</td>
      <td className="py-3">{recipe_name}</td>
      <td className="py-3 px-4">{preparing_time}</td>
      <td className="py-3 px-4">{calories}</td>
      <td className="py-3 px-4">
        <button
          onClick={() => handlePreparingButton(toCook)}
          className="bg-[#0BE58A] text-[#150B2B] font-semibold px-4 py-2 rounded-[50px]"
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

Table.propTypes = {
  toCook: PropTypes.object.isRequired,
  handlePreparingButton: PropTypes.func.isRequired,
};
export default Table;
