import { Table } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";

// Others
import dataSource from "../data/data.json";

const Data = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Screen Name",
      dataIndex: "screen_name",
      key: "screen_name",
    },
    {
      title: "Followers Count",
      dataIndex: "followers_count",
      key: "followers_count",
    },
    {
      title: "Friends Count",
      dataIndex: "friends_count",
      key: "friends_count",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Verified",
      dataIndex: "verified",
      key: "verified",
      render: (data) =>
        data ? (
          <CheckCircleTwoTone
            twoToneColor="#52c41a"
            style={{
              fontSize: "20px",
            }}
          />
        ) : (
          <CloseCircleTwoTone
            twoToneColor="#eb2f96"
            style={{
              fontSize: "20px",
            }}
          />
        ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 100, hideOnSinglePage: true }}
      scroll={{ y: 300, x: 700 }}
    />
  );
};

export default Data;
