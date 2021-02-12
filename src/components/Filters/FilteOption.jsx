import { Select } from "antd";

const { Option } = Select;

const FilterOption = () => {
  return (
    <Select defaultValue="and">
      <Option value="and">AND</Option>
      <Option value="or">OR</Option>
    </Select>
  );
};

export default FilterOption;
