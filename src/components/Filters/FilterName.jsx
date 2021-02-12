import { Select } from "antd";

const { Option } = Select;

const FilterName = () => {
  return (
    <Select defaultValue="lucy">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  );
};

export default FilterName;
