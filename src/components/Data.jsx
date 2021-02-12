import { Table } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import { useContext } from "react";

// Others
import dataSource from "../data/data.json";
import { DataContext } from "../context";

const Data = () => {
  const { data } = useContext(DataContext);

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
      title: "Following Count",
      dataIndex: "following_count",
      key: "following_count",
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
      dataSource={data}
      pagination={{ pageSize: 100, hideOnSinglePage: true }}
      scroll={{ y: 300, x: 700 }}
    />
  );
};

export default Data;
