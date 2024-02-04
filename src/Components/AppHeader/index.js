import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={100}
        src="data:image/png;base64,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"
      ></Image>
      <Typography.Title>Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}
export default AppHeader;
