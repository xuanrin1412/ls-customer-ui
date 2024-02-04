import {
    Button,
    Card,
    Col,
    Flex,
    Row,
    Select,
    Space,
    Table,
    Typography,
} from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import { EditOutlined, EyeOutlined, SettingOutlined } from "@ant-design/icons";

function Customers() {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        getInventory().then((res) => {
            setDataSource(res.products);
        });
    }, []);

    const [activeTabKey, setActiveTabKey] = useState("app");

    const onTabChange = (key) => {
        setActiveTabKey(key);
    };

    const tabList = [
        {
            key: "phieu",
            label: "Phiếu",
        },
        {
            key: "sanpham",
            label: "Sản Phẩm",
        },
    ];
    const columns = [
        {
            title: <span style={{ fontWeight: "bold" }}>STT</span>,
            dataIndex: "id",
        },
        Table.SELECTION_COLUMN,
        {
            render: (_, record) =>
                dataSource.length ? (
                    <Flex horizontal>
                        <EyeOutlined
                            style={{ color: "#006A80", fontSize: 20 }}
                        />
                        <EditOutlined
                            style={{ color: "#006A80", fontSize: 20 }}
                        />
                    </Flex>
                ) : null,
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Loại giao dịch
                </span>
            ),
            dataIndex: "title",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Mã phiếu
                </span>
            ),
            dataIndex: "price",
        },

        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Ngày thực hiện
                </span>
            ),
            dataIndex: "discountPercentage",
        },
        {
            title: "Kho",
            dataIndex: "stock",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Mã sản phẩm
                </span>
            ),
            dataIndex: "brand",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Số lượng
                </span>
            ),
            dataIndex: "rating",
        },
        {
            title: "ĐVT",
            dataIndex: "category",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Trọng lượng
                </span>
            ),
            dataIndex: "rating",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Quy Cách
                </span>
            ),
            dataIndex: "category",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Chủng loài
                </span>
            ),
            dataIndex: "description",
            render: (text) => {
                return <Space style={{ width: "900px" }}>{text}</Space>;
            },
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Xuất xứ
                </span>
            ),
            dataIndex: "category",
        },
    ];
    const contentList = {
        phieu: <p>Trang phiếu</p>,
        sanpham: (
            <div>
                <Table
                    className="custom-table"
                    size="small"
                    style={{ width: "1060px" }}
                    columns={columns}
                    rowSelection={{}}
                    dataSource={dataSource}
                    pagination={{
                        pageSize: 4,
                        position: ["bottomLeft"],
                    }}
                    bordered
                    scroll={{ x: "max-content" }}
                ></Table>
            </div>
        ),
    };
    const buttonList = [
        "Tìm kiếm",
        "Lập phiếu",
        "Sao chéo",
        "Xóa",
        "In",
        "Xuất file",
    ];
    const searchInfo = [
        "Loại giao dịch",
        "Mã phiếu",
        "Ngày thực hiện",
        "Mã sản phẩm",
        "Quy Cách",
        "Xuất xứ",
    ];

    return (
        <Space size={5} direction="vertical" style={{ width: "100%" }}>
            <Typography.Title level={4}>Tổng giao dịch kho</Typography.Title>
            <Card
                size="small"
                style={{
                    background: "white",
                }}
            >
                <Row
                    style={{
                        width: "100%",
                        border: "1px solid lightgray",
                        paddingBottom: "15px",
                    }}
                >
                    <Col
                        span={24}
                        style={{
                            backgroundColor: "lightgray",
                            padding: "2px",
                            paddingLeft: "30px",
                        }}
                    >
                        Thông tin tìm kiếm
                    </Col>
                    {searchInfo.map((info, index) => (
                        <Col
                            key={index}
                            span={8}
                            style={{
                                padding: "0 20px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <p>{info}</p>

                            <Select
                                defaultValue=""
                                style={{ width: 200 }}
                                allowClear
                                options={[{ value: "test", label: "Test" }]}
                            />
                        </Col>
                    ))}
                </Row>

                <Flex justify="space-between" style={{ margin: "10px 0" }}>
                    <Space>
                        {buttonList.map((btn, index) => (
                            <Button
                                key={index}
                                type="text"
                                style={{
                                    backgroundColor: "#006A80",
                                    color: "white",
                                }}
                            >
                                {btn}
                            </Button>
                        ))}
                    </Space>
                    <SettingOutlined
                        style={{
                            cursor: "pointer",
                            color: "green",
                            fontSize: 24,
                            paddingRight: "10px",
                        }}
                    />
                </Flex>
                <Card
                    size="small"
                    tabList={tabList}
                    activeTabKey={activeTabKey}
                    onTabChange={onTabChange}
                >
                    {contentList[activeTabKey]}
                </Card>
            </Card>
        </Space>
    );
}

export default Customers;
