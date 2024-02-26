import { Button, Col, DatePicker, Flex, Row, Select, Table } from "antd";
import dayjs from "dayjs";
import { DeleteOutlined, QuestionOutlined } from "@ant-design/icons";
import { dataAddMaterials, dataProductAProcess } from "./dataSample";
const { RangePicker } = DatePicker;
const { Column, ColumnGroup } = Table;

export default function GeneralInfo({ eyeOnClicked, enterResultManu }) {
    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };
    function handleChange(value) {
        console.log(`Selected: ${value}`);
    }
    return (
        <div>
            <div style={{ paddingBottom: "20px" }}>
                <Row gutter={[20, 15]}>
                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>
                            Chi nhánh <span style={{ color: "red" }}>(*)</span>
                        </span>
                        <Flex gap={5}>
                            <Select
                                required
                                className="selectStyle"
                                style={{ width: "200px" }}
                                defaultValue="CÔNG TY CP THÉP BẮC NAM"
                                options={[
                                    {
                                        value: "CÔNG TY CP THÉP BẮC NAM",
                                        label: "CÔNG TY CP THÉP BẮC NAM",
                                    },
                                    {
                                        value: "CÔNG TY CP THÉP TRUNG ĐÔNG",
                                        label: "CÔNG TY CP THÉP TRUNG ĐÔNG",
                                    },
                                    {
                                        value: "CÔNG TY CP THÉP SÀI GÒN",
                                        label: "CÔNG TY CP THÉP SÀI GÒN ",
                                    },
                                ]}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    height: 30,
                                    width: 30,
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                <QuestionOutlined
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </span>
                        </Flex>
                    </Col>
                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>
                            Mã lệnh gia công{" "}
                            <span style={{ color: "red" }}>(*)</span>
                        </span>
                        <Flex gap={5}>
                            <Select
                                className="selectStyle"
                                style={{ width: "200px" }}
                                options={[
                                    {
                                        value: "LGC01",
                                        label: "LGC01",
                                    },
                                    {
                                        value: "LGC02",
                                        label: "LGC02",
                                    },
                                    {
                                        value: "LGC03",
                                        label: "LGC03 ",
                                    },
                                ]}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    height: 30,
                                    width: 30,
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                <QuestionOutlined
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </span>
                        </Flex>
                    </Col>

                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>
                            Ngày gia công{" "}
                            <span style={{ color: "red" }}>(*)</span>
                        </span>
                        <Flex gap={5}>
                            <RangePicker
                                className="pickerStyle"
                                onChange={onChangeDate}
                                format="DD/MM/YYYY"
                                defaultValue={[
                                    dayjs("01/01/2022", "DD/MM/YYYY"),
                                    dayjs("01/01/2024", "DD/MM/YYYY"),
                                ]}
                                style={{ width: "200px" }}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    height: 30,
                                    width: 30,
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                <QuestionOutlined
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </span>
                        </Flex>
                    </Col>

                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>
                            Loại hình <span style={{ color: "red" }}>(*)</span>
                        </span>
                        <Flex gap={5}>
                            <Select
                                className="selectStyle"
                                style={{ width: "200px" }}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    height: 30,
                                    width: 30,
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                <QuestionOutlined
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </span>
                        </Flex>
                    </Col>
                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>
                            Loại gia công{" "}
                            <span style={{ color: "red" }}>(*)</span>
                        </span>
                        <Flex gap={5}>
                            <Select
                                className="selectStyle"
                                style={{ width: "200px" }}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    height: 30,
                                    width: 30,
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                <QuestionOutlined
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </span>
                        </Flex>
                    </Col>
                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>
                            Mã đơn hàng{" "}
                            <span style={{ color: "red" }}>(*)</span>
                        </span>
                        <Flex gap={5}>
                            <Select
                                className="selectStyle"
                                style={{ width: "200px" }}
                                options={[
                                    {
                                        value: "ĐGC01",
                                        label: "ĐGC01",
                                    },
                                    {
                                        value: "ĐGC02",
                                        label: "ĐGC02",
                                    },
                                    {
                                        value: "ĐGC03",
                                        label: "ĐGC03 ",
                                    },
                                ]}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    height: 30,
                                    width: 30,
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                <QuestionOutlined
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </span>
                        </Flex>
                    </Col>

                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>Khách hàng</span>
                        <Flex gap={5}>
                            <Select
                                required
                                className="selectStyle"
                                style={{ width: "200px" }}
                                options={[
                                    {
                                        value: "Jenny Huỳnh",
                                        label: "Jenny Huỳnh",
                                    },
                                    {
                                        value: "Kim Long",
                                        label: "Kim Long",
                                    },
                                    {
                                        value: "Tiểu Vy",
                                        label: "Tiểu Vy ",
                                    },
                                ]}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    height: 30,
                                    width: 30,
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                <QuestionOutlined
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </span>
                        </Flex>
                    </Col>
                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>
                            Người yêu cầu{" "}
                            <span style={{ color: "red" }}>(*)</span>
                        </span>
                        <Flex gap={5}>
                            <Select
                                className="selectStyle"
                                style={{ width: "200px" }}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    height: 30,
                                    width: 30,
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                <QuestionOutlined
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </span>
                        </Flex>
                    </Col>

                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>
                            Đơn vị thực hiện{" "}
                            <span style={{ color: "red" }}>(*)</span>
                        </span>
                        <Flex gap={5}>
                            <Select
                                className="selectStyle"
                                style={{ width: "200px" }}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    height: 30,
                                    width: 30,
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                <QuestionOutlined
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </span>
                        </Flex>
                    </Col>

                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>
                            Quy trình phê duyệt{" "}
                            <span style={{ color: "red" }}>(*)</span>
                        </span>
                        <Flex gap={5}>
                            <Select
                                required
                                className="selectStyle"
                                style={{ width: "200px" }}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    height: 30,
                                    width: 30,
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                <QuestionOutlined
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </span>
                        </Flex>
                    </Col>
                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>Trạng thái phê duyệt</span>
                        <Flex gap={5}>
                            <Select
                                className="selectStyle"
                                style={{ width: "200px" }}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    height: 30,
                                    width: 30,
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                <QuestionOutlined
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </span>
                        </Flex>
                    </Col>
                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>Trạng thái gia công</span>
                        <Flex gap={5}>
                            <Select
                                className="selectStyle"
                                style={{ width: "200px" }}
                                defaultValue="Mới"
                                options={[
                                    {
                                        value: "Mới ",
                                        label: "Mới ",
                                    },
                                    {
                                        value: "Đang gia công",
                                        label: "Đang gia công",
                                    },
                                    {
                                        value: "Hoàn thành",
                                        label: "Hoàn thành ",
                                    },
                                ]}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    height: 30,
                                    width: 30,
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                <QuestionOutlined
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </span>
                        </Flex>
                    </Col>
                </Row>
            </div>
            {eyeOnClicked || enterResultManu ? (
                ""
            ) : (
                <Button style={{ margin: "4px 0", backgroundColor: "#F0F0F0" }}>
                    Thêm nguyên vật liệu
                </Button>
            )}

            <Table
                dataSource={dataAddMaterials}
                scroll={{
                    x: 2150,
                    y: 150,
                }}
                size="small"
                pagination={false}
                bordered
                className="custom-table-generalInfo"
            >
                {eyeOnClicked || enterResultManu ? (
                    ""
                ) : (
                    <Column
                        title="Xóa"
                        dataIndex="xoa"
                        key="xoa"
                        render={(_, record) => (
                            <Flex justify="center">
                                <DeleteOutlined />
                            </Flex>
                        )}
                    />
                )}

                <Column title="STT" dataIndex="stt" key="stt" />
                <ColumnGroup title="Nguyên liệu trước gia công">
                    <Column
                        title={
                            <span>
                                Mã sản phẩm
                                <span style={{ color: "red" }}>(*)</span>
                            </span>
                        }
                        dataIndex="maSanPham"
                        key="maSanPham"
                        render={(text, record) => (
                            <Select
                                style={{ width: "100px" }}
                                onChange={handleChange}
                                required
                                defaultValue="5.8 x 1500"
                                options={[
                                    {
                                        value: "5.8 x 1500",
                                        label: "5.8 x 1500",
                                    },
                                    {
                                        value: "10 x 1000",
                                        label: "10 x 1000",
                                    },
                                ]}
                            />
                        )}
                    />
                    <Column
                        title="Quy cách"
                        dataIndex="quyCach"
                        key="quyCach"
                    />
                    <Column title="Xuất xứ" dataIndex="xuatXu" key="xuatXu" />
                    <Column
                        title="Mác thép"
                        dataIndex="macThep"
                        key="macThep"
                    />
                    <Column
                        title={
                            <span>
                                Số lượng{" "}
                                <span style={{ color: "red" }}>(*)</span>
                            </span>
                        }
                        dataIndex="soLuong"
                        key="soLuong"
                    />
                    <Column
                        title="Đơn vị tính "
                        dataIndex="donViTinh"
                        key="donViTinh"
                        render={(text, record) => (
                            <Select
                                onChange={handleChange}
                                required
                                className="selectStyleGeneral"
                                // style={{ width: "auto" }}
                                defaultValue="Cuộn"
                                options={[
                                    {
                                        value: "Cuộn",
                                        label: "Cuộn",
                                    },
                                    {
                                        value: "Cái",
                                        label: "Cái",
                                    },
                                ]}
                            />
                        )}
                    />
                    <Column
                        title="Trọng lượng (kg)"
                        dataIndex="trongLuong"
                        key="trongLuong"
                    />
                    <Column
                        title="Độ dài dự kiến (m)"
                        dataIndex="doDaiDuKien"
                        key="doDaiDuKien"
                    />
                </ColumnGroup>
                <ColumnGroup title="Nguyên liệu thực tế">
                    <Column title="Độ dài (m)" dataIndex="doDai" key="doDai" />
                    <Column
                        title="Khổ rộng (mm)"
                        dataIndex="khoRong"
                        key="khoRong"
                    />
                    <Column
                        title="Đo thực tế - Min (mm)"
                        dataIndex="doThucTeMin"
                        key="doThucTe"
                    />
                    <Column
                        title="Đo thực tế - Max (mm)"
                        dataIndex="doThucTeMax"
                        key="doThucTeMax"
                    />
                </ColumnGroup>
                <Column title="Tổng (Kg)" dataIndex="tong" key="tong" />
                <Column
                    title="Dung sai (%)"
                    dataIndex="dungSai"
                    key="dungSai"
                />
                <Column
                    title="Phiếu xuất kho"
                    dataIndex="phieuXuatKho"
                    key="phieuXuatKho"
                />
                <Column title="Ghi Chú" dataIndex="ghiChu" key="ghiChu" />
            </Table>
            {eyeOnClicked || enterResultManu ? (
                ""
            ) : (
                <Button
                    style={{
                        margin: "25px 0 4px 0",
                        backgroundColor: "#F0F0F0",
                    }}
                >
                    Thêm sản phẩm sau gia công
                </Button>
            )}

            <Table
                style={{ marginTop: eyeOnClicked || enterResultManu ? 40 : 0 }}
                dataSource={dataProductAProcess}
                scroll={{
                    x: 1700,
                    y: 150,
                }}
                pagination={false}
                bordered
            >
                {eyeOnClicked || enterResultManu ? (
                    ""
                ) : (
                    <Column
                        title="Xóa"
                        dataIndex="xoa"
                        key="xoa"
                        render={(_, record) => (
                            <Flex justify="center">
                                <DeleteOutlined />
                            </Flex>
                        )}
                    />
                )}

                <Column title="STT" dataIndex="stt" key="stt" />
                <Column
                    title={
                        <span>
                            Mã sản phẩm{" "}
                            <span style={{ color: "red" }}>(*)</span>
                        </span>
                    }
                    dataIndex="maSanPham"
                    key="maSanPham"
                    render={(text, record) => (
                        <Select
                            style={{ width: "100px" }}
                            onChange={handleChange}
                            required
                            defaultValue="6lyx1500x6000"
                            options={[
                                {
                                    value: "6lyx1500x6000",
                                    label: "6lyx1500x6000",
                                },
                                {
                                    value: "Phế liệu",
                                    label: "Phế liệu",
                                },
                            ]}
                        />
                    )}
                />
                <Column
                    title="Quy cách (Theo đơn hàng)"
                    dataIndex="quyCachTheoDonHang"
                    key="quyCachTheoDonHang"
                />
                <Column
                    title="Quy Cách Cắt"
                    dataIndex="quyCachCat"
                    key="quyCachCat"
                />
                <Column
                    title="Đơn vị tính (Thương mại)"
                    dataIndex="donViTinh"
                    key="donViTinh"
                    render={(text, record) => (
                        <Select
                            style={{ width: "100px" }}
                            onChange={handleChange}
                            required
                            defaultValue="mm"
                            options={[
                                {
                                    value: "mm",
                                    label: "mm",
                                },
                                {
                                    value: "cm",
                                    label: "cm",
                                },
                            ]}
                        />
                    )}
                />
                <Column title="Số lượng" dataIndex="soLuong" key="soLuong" />
                <Column
                    title="ĐVT"
                    dataIndex="dvt"
                    key="dvt"
                    render={(text, record) => (
                        <Select
                            style={{ width: "100px" }}
                            onChange={handleChange}
                            required
                            defaultValue="Tấm"
                            options={[
                                {
                                    value: "Tấm",
                                    label: "Tấm",
                                },
                                {
                                    value: "Cuộn",
                                    label: "Cuộn",
                                },
                            ]}
                        />
                    )}
                />
                <Column
                    title="Trọng lượng (kg)"
                    dataIndex="trongLuong"
                    key="trongLuong"
                />
                <Column
                    title="Dung sai (%)"
                    dataIndex="dungSai"
                    key="dungSai"
                />
                <Column
                    title="Phiếu nhập kho"
                    dataIndex="phieuNhapKho"
                    key="phieuNhapKho"
                />
                <Column title="Ghi chú" dataIndex="ghiChu" key="ghiChu" />
            </Table>
        </div>
    );
}
