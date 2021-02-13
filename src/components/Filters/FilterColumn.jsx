import { Select } from "antd";
import { useContext, Children } from "react";

// Others
import { DataContext } from "../../context";

const { Option } = Select;

const ColumnName = ({ item }) => {
  const { columnName, inputChange, conditions } = useContext(DataContext);

  const handleChange = (value) => {
    inputChange(item.uid, "id", value);
  };

  const conditionColumns = conditions
    .map((item) => item.id)
    .filter((item) => item);

  return (
    <Select placeholder="Select Column" onChange={handleChange} value={item.id}>
      {Children.toArray(
        columnName
          .filter((item) => !conditionColumns.includes(item.value))
          .map((item) => <Option value={item.value}>{item.key}</Option>)
      )}
    </Select>
  );
};

export default ColumnName;
