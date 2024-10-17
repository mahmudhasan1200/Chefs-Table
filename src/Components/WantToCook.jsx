import Table from "./Table";
import PropTypes from "prop-types";
import PreparingTable from "./PreparingTable";

const WantToCook = ({
  toCooks,
  handlePreparingButton,
  SelectedToCook,
  totalCalories,
  totalTime,
}) => {
  return (
    <div className="w-[514px] rounded-2xl border border-[#28282833]">
      <h4 className="text-[#282828] text-2xl font-semibold mt-8 text-center">
        Want to cook: {toCooks.length}
      </h4>
      <div className="flex justify-center">
        <hr className="mt-4 mb-6 w-[350px]" />
      </div>
      <table className="w-full text-[#878787] border-collapse">
        <thead>
          <tr>
            <th className="text-left py-3 px-4"></th>
            <th className="text-left py-3 px-4">Name</th>
            <th className="text-left py-3 px-4">Time</th>
            <th className="text-left py-3 px-4">Calories</th>
          </tr>
        </thead>
        <tbody>
          {toCooks.map((toCook, idx) => (
            <Table
              handlePreparingButton={handlePreparingButton}
              key={idx}
              toCook={toCook}
            />
          ))}
        </tbody>
      </table>
      <h4 className="text-[#282828] text-2xl font-semibold mt-8 text-center">
        Currently cooking: {SelectedToCook.length}
      </h4>
      <div className="flex justify-center">
        <hr className="mt-4 mb-6 w-[350px]" />
      </div>
      <table className="w-full text-[#878787] border-collapse">
        <thead>
          <tr>
            <th className="text-left py-3 px-4"></th>
            <th className="text-left py-3 px-4">Name</th>
            <th className="text-left py-3 px-4">Time</th>
            <th className="text-left py-3 px-4">Calories</th>
          </tr>
        </thead>
        <tbody>
          {SelectedToCook.map((item, idx) => (
            <PreparingTable key={idx} SelectedToCook={item} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <table className="border-collapse text-[#282828cc]">
          <thead>
            <tr>
              <th className="px-4 text-lg font-medium">Total Time =</th>
              <th className="px-4 text-lg font-medium">Total Calories =</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4">{totalTime}</td>
              <td className="px-4">{totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

WantToCook.propTypes = {
  toCooks: PropTypes.array.isRequired,
  handlePreparingButton: PropTypes.func.isRequired,
  SelectedToCook: PropTypes.array.isRequired,
  totalCalories: PropTypes.number,
  totalTime: PropTypes.number,
};

export default WantToCook;
