import { Select } from "antd";
import { useContext, Children } from "react";

// Others
import { DataContext } from "../../context";

const { Option } = Select;

const FilterOperator = ({ item }) => {
  const { operators, inputChange } = useContext(DataContext);

  const handleChange = (value) => {
    inputChange(item.uid, "operator", value);
  };

  let filteredOperators = operators;

  if (!item.id) {
    filteredOperators = operators;
  } else if (["name", "screen_name", "location"].includes(item.id)) {
    filteredOperators = operators.filter((item) =>
      ["CONTAINS"].includes(item.value)
    );
  } else if (["followers_count", "following_count"].includes(item.id)) {
    filteredOperators = operators.filter((item) =>
      ["GTE", "LTE"].includes(item.value)
    );
  } else if (["verified"].includes(item.id)) {
    filteredOperators = operators.filter((item) => ["EQ"].includes(item.value));
  }

  return (
    <Select
      placeholder="Select Operator"
      onChange={handleChange}
      value={item.operator}
      disabled={!item.id}
    >
      {Children.toArray(
        filteredOperators.map((item) => (
          <Option value={item.value}>{item.key}</Option>
        ))
      )}
    </Select>
  );
};

export default FilterOperator;
