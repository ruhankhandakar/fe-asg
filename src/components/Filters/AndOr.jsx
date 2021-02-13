import { Select } from "antd";

const { Option } = Select;

const AndOr = () => {
  return (
    <Select placeholder="Select Value" value="&&">
      <Option value="&&">AND</Option>
      <Option value="||">OR</Option>
    </Select>
  );
};

export default AndOr;
