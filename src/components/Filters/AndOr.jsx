import { Select } from "antd";
import { useContext } from "react";

// Others
import { DataContext } from "../../context";

const { Option } = Select;

const AndOr = () => {
  const { changeWhereCondition, whereCondition } = useContext(DataContext);

  const handleChange = (value) => {
    changeWhereCondition(value);
  };

  return (
    <Select
      placeholder="Select Value"
      value={whereCondition}
      onChange={handleChange}
      style={{
        width: "72px",
      }}
    >
      <Option value="AND">AND</Option>
      <Option value="OR">OR</Option>
    </Select>
  );
};

export default AndOr;
