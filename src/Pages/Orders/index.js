import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../../API";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
   
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
     
    </Space>
  );
}
export default Orders;
