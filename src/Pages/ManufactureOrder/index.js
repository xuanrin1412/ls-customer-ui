import {
    Button,
    Card,
    Checkbox,
    Col,
    DatePicker,
    Divider,
    Drawer,
    Flex,
    Modal,
    Row,
    Select,
    Space,
    Table,
    Typography,
} from "antd";
import { useState } from "react";
import { EditOutlined, EyeOutlined, SettingOutlined } from "@ant-design/icons";
import {
    dataSource,
    optionsArrange,
    defaultSelectedColumns,
} from "./dataSample";
import GeneralInfo from "./generalInfo";
import MoreInfo from "./moreInfo";
import PrintPic from "./print.png";
const { RangePicker } = DatePicker;

function ManufactureOrder() {
    //
    // ============ SETTING HANDLE SELECTED COLUMN ========================
    const [selectedColumns, setSelectedColumns] = useState(
        defaultSelectedColumns
    );
    const handleColumnChange = (selected) => {
        if (!selected.includes("stt")) {
            selected.push("stt");
        }
        setSelectedColumns(selected);
    };
    const handleReset = () => {
        setSelectedColumns(defaultSelectedColumns);
    };

    //=======================HANDLE SETTING========================
    const [settingOpen, setSettingOpen] = useState(false);
    const openSetting = () => {
        setSettingOpen(true);
    };

    //===================Thêm mới lệnh gia công=======================
    const [isModalManuOpen, setIsModalManuOpen] = useState(false);
    const showModal = (record) => {
        setIsModalManuOpen(true);
    };
    const handleOk = () => {
        setEyeOnClicked(false);
        setIsModalManuOpen(false);
        setAdmin(false);
        setEnterResultManu(false);
        // setCompleteMachining(false);
        // setStartMachining(false);
    };
    const handleCancel = () => {
        setEyeOnClicked(false);
        setIsModalManuOpen(false);
        setAdmin(false);
        setEnterResultManu(false);
        // setCompleteMachining(false);
        // setStartMachining(false);
    };

    //===============Columns of Lệnh Gia Công=================
    const [eyeOnClicked, setEyeOnClicked] = useState(false);
    const [admin, setAdmin] = useState(false); //tại biến lưu state admin
    console.log(eyeOnClicked);

    const columns = [
        {
            title: "STT",
            dataIndex: "stt",
            key: "stt",
        },

        {
            render: (_, record) =>
                dataSource.length ? (
                    <Flex horizontal>
                        <EyeOutlined
                            onClick={() => {
                                showModal(record);
                                setEyeOnClicked(!eyeOnClicked);
                                setAdmin(!admin);
                            }}
                            style={{
                                color: `var(--primary-color)`,
                                fontSize: 20,
                            }}
                        />
                        <EditOutlined
                            style={{
                                color: `var(--primary-color)`,
                                fontSize: 20,
                                marginLeft: 5,
                            }}
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
                    Loại hình
                </span>
            ),
            dataIndex: "loaiHinh",
            key: "loaiHinh",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Chi nhánh
                </span>
            ),
            dataIndex: "chiNhanh",
            key: "chiNhanh",
        },

        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Mã lệnh gia công
                </span>
            ),
            dataIndex: "maLenhGiaCong",
            key: "maLenhGiaCong",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Ngày gia công
                </span>
            ),
            dataIndex: "ngayGiaCong",
            key: "ngayGiaCong",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Loại gia công
                </span>
            ),
            dataIndex: "loaiGiaCong",
            key: "loaiGiaCong",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Mã đơn hàng
                </span>
            ),
            dataIndex: "maDonHang",
            key: "maDonHang",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Khách hàng
                </span>
            ),
            dataIndex: "khachHang",
            key: "khachHang",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Người yêu cầu
                </span>
            ),
            dataIndex: "nguoiYeuCau",
            key: "nguoiYeuCau",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Đơn vị thực hiện
                </span>
            ),
            dataIndex: "donViThucHien",
            key: "donViThucHien",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Quy trình phê duyệt
                </span>
            ),
            dataIndex: "quyTrinhPheDuyet",
            key: "quyTrinhPheDuyet",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Trạng thái phê duyệt
                </span>
            ),
            dataIndex: "trangThaiPheDuyet",
            key: "trangThaiPheDuyet",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Trạng thái gia công
                </span>
            ),
            dataIndex: "trangThaiGiaCong",
            key: "trangThaiGiaCong",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Phiếu xuất kho
                </span>
            ),
            dataIndex: "phieuXuatKho",
            key: "phieuXuatKho",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Mã đơn gia công
                </span>
            ),
            dataIndex: "maDonGiaCong",
            key: "maDonGiaCong",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Ngày tạo
                </span>
            ),
            dataIndex: "ngayTao",
            key: "ngayTao",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Ngày cập nhật
                </span>
            ),
            dataIndex: "ngayCapNhat",
            key: "ngayCapNhat",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Ghi Chú
                </span>
            ),
            dataIndex: "ghiChu",
            key: "ghiChu",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Người tạo
                </span>
            ),
            dataIndex: "nguoiTao",
            key: "nguoiTao",
        },
        {
            title: (
                <span
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    Người cập nhật
                </span>
            ),
            dataIndex: "nguoiCapNhat",
            key: "nguoiCapNhat",
        },
    ];

    // ==================== Click button enterResultManu =================
    const [enterResultManu, setEnterResultManu] = useState(false);

    //============== CHANGE TAB LẬP LỆNH GIA CÔNG =================
    const [activeTabKey, setActiveTabKey] = useState("thongTinChung");
    const onTabChange = (key) => {
        setActiveTabKey(key);
    };
    const tabList = [
        {
            key: "thongTinChung",
            label: "Thông Tin Chung ",
        },
        {
            key: "thongTinThem",
            label: "Thông tin thêm",
        },
    ];
    const contentList = {
        thongTinChung: (
            <GeneralInfo
                eyeOnClicked={eyeOnClicked}
                enterResultManu={enterResultManu}
            />
        ),
        thongTinThem: <MoreInfo />,
    };

    //============== Thông tin liên hệ onChange ====================
    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };
    // filter option match with user type
    const filterOption = (input, option) => {
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
    };

    //===================== IN ======================
    const [isModalPrintOpen, setIsModalPrintOpen] = useState(false);
    const handleCancelPrint = () => {
        setIsModalPrintOpen(false);
    };
    const handleOkPrint = () => {
        setIsModalPrintOpen(false);
    };
    const showModalPrint = () => {
        setIsModalPrintOpen(true);
    };

    // ===========Nhập kết quả gia công =====================
    const [exportMaterials, setExportMaterials] = useState(true);
    const [startMachining, setStartMachining] = useState(false);
    const [completeMachining, setCompleteMachining] = useState(false);

    return (
        <Space size={5} direction="vertical" style={{ width: "100%" }}>
            <Typography.Title level={4}>Lệnh gia công</Typography.Title>
            <Card
                size="small"
                style={{
                    background: "white",
                }}
            >
                {/*================= THÔNG TIN TÌM KIẾM =================  */}
                <div style={{ border: "1px solid lightgray", borderRadius: 5 }}>
                    <Col
                        span={24}
                        style={{
                            margin: "2px",
                            padding: "5px 50px",
                            backgroundColor: "lightgray",
                            borderRadius: 4,
                        }}
                    >
                        Thông tin tìm kiếm
                    </Col>
                    <div style={{ padding: "15px" }}>
                        <Row
                            gutter={[30, 10]}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Col
                                span={8}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span>Chi nhánh</span>
                                <Select
                                    showSearch
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={filterOption}
                                    className="selectStyle"
                                    style={{ width: "220px" }}
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
                                <Select
                                    className="selectStyle"
                                    style={{ width: "220px" }}
                                    showSearch
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={filterOption}
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
                            </Col>
                            <Col
                                span={8}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span>Mã đơn gia công</span>
                                <Select
                                    className="selectStyle"
                                    style={{ width: "220px" }}
                                    showSearch
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={filterOption}
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
                            </Col>

                            <Col
                                span={8}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span>Ngày gia công</span>
                                <RangePicker
                                    onChange={onChangeDate}
                                    format="DD/MM/YYYY"
                                    className="pickerStyle"
                                    style={{ width: "220px" }}
                                />
                            </Col>
                            <Col
                                span={8}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span>Mã đơn hàng</span>
                                <Select
                                    className="selectStyle"
                                    style={{ width: "220px" }}
                                    showSearch
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={filterOption}
                                    options={[
                                        {
                                            value: "ĐH01",
                                            label: "ĐH01",
                                        },
                                        {
                                            value: "ĐH02",
                                            label: "ĐH02",
                                        },
                                        {
                                            value: "ĐH03",
                                            label: "ĐH03 ",
                                        },
                                    ]}
                                />
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
                                <Select
                                    className="selectStyle"
                                    style={{ width: "220px" }}
                                    showSearch
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={filterOption}
                                    options={[
                                        {
                                            value: "Mới tạo",
                                            label: "Mới tạo",
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
                            </Col>
                        </Row>
                    </div>
                </div>

                {/*====================== LIST BUTTON====================== */}
                <Flex
                    justify="space-between"
                    style={{ margin: "10px 0 15px 0" }}
                >
                    <Space>
                        <Button
                            type="text"
                            style={{
                                backgroundColor: `var(--primary-color)`,
                                color: "white",
                            }}
                        >
                            Tìm kiếm
                        </Button>
                        <Button
                            type="text"
                            style={{
                                backgroundColor: `var(--primary-color)`,
                                color: "white",
                            }}
                            onClick={() => {
                                showModal();
                            }}
                        >
                            Lập lệnh gia công
                        </Button>
                        <Button
                            type="text"
                            style={{
                                backgroundColor: `var(--primary-color)`,
                                color: "white",
                            }}
                        >
                            Sao chép
                        </Button>
                        <Button
                            type="text"
                            style={{
                                backgroundColor: `var(--primary-color)`,
                                color: "white",
                            }}
                        >
                            Xóa
                        </Button>
                        <Button
                            type="text"
                            style={{
                                backgroundColor: `var(--primary-color)`,
                                color: "white",
                            }}
                            onClick={showModalPrint}
                        >
                            In
                        </Button>
                        <Button
                            type="text"
                            style={{
                                backgroundColor: `var(--primary-color)`,
                                color: "white",
                            }}
                        >
                            Xuất file
                        </Button>
                        <Button
                            type="text"
                            style={{
                                backgroundColor: `var(--primary-color)`,
                                color: "white",
                            }}
                            onClick={() => {
                                showModal();
                                setEnterResultManu(!enterResultManu);
                            }}
                        >
                            Nhập kết quả gia công
                        </Button>
                    </Space>
                    <SettingOutlined
                        style={{
                            cursor: "pointer",
                            color: `var(--primary-color)`,
                            fontSize: 24,
                            paddingRight: "10px",
                        }}
                        onClick={openSetting}
                    />
                </Flex>

                {/*================== TABLE LỆNH GIA CÔNG=================== */}
                <Card size="small">
                    <Table
                        className="custom-table"
                        size="middle"
                        style={{ width: "100%" }}
                        columns={columns.filter(
                            (col) =>
                                selectedColumns.includes(col.dataIndex) ||
                                col.render
                        )}
                        dataSource={dataSource}
                        pagination={{
                            size: "default",
                            pageSize: 4,
                            position: ["bottomLeft"],
                        }}
                        bordered
                        scroll={{ x: "max-content" }}
                    ></Table>
                </Card>

                {/*===================== SETTING ==========================*/}
                <Drawer
                    className="styleDrawer"
                    title={null}
                    open={settingOpen}
                    footer={
                        <Flex justify="flex-end" gap={10}>
                            <Button
                                type="primary"
                                style={{
                                    backgroundColor: `var(--primary-color)`,
                                }}
                                onClick={handleReset}
                            >
                                Làm mới
                            </Button>
                            <Button
                                onClick={() => {
                                    setSettingOpen(false);
                                }}
                                type="primary"
                                style={{
                                    backgroundColor: `var(--primary-color)`,
                                }}
                            >
                                Hủy
                            </Button>
                        </Flex>
                    }
                >
                    <Typography.Title
                        level={4}
                        style={{
                            padding: "5px 20px",
                            backgroundColor: "#F2F2F2",
                            borderBottom: "1px solid lightgray",
                        }}
                    >
                        Tùy chọn hiên thị
                    </Typography.Title>
                    <div style={{ padding: "0 20px" }}>
                        <Typography.Title level={5} style={{ paddingTop: 5 }}>
                            Sắp xếp hiển thị
                        </Typography.Title>
                        <Select
                            mode="multiple"
                            style={{ width: "100%", padding: "10px 0" }}
                            options={optionsArrange}
                        />
                        <Typography.Title level={5}>
                            Chọn hiển thị điều kiện tìm kiếm
                        </Typography.Title>
                        <Divider style={{ margin: "10px 0" }} />
                        <Row gutter={[10, 10]}>
                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Chi nhánh
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Người yêu cầu
                                </Flex>
                            </Col>

                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Mã đơn gia công
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Ngày gia công
                                </Flex>
                            </Col>

                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Loại gia công
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Mã đơn hàng
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Đơn vị thực hiện
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Trạng thái gia công
                                </Flex>
                            </Col>

                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Trạng thái phê duyệt
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Ghi chú
                                </Flex>
                            </Col>

                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Ngày tạo
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Người tạo
                                </Flex>
                            </Col>

                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Ngày cập nhật
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Người cập nhật
                                </Flex>
                            </Col>

                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Loại hình
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Phiếu xuất kho
                                </Flex>
                            </Col>
                            <Col span={12}>
                                <Flex gap={8}>
                                    <Checkbox /> Phiếu Nhập kho
                                </Flex>
                            </Col>
                        </Row>
                        <Typography.Title
                            level={5}
                            style={{ paddingTop: "10px" }}
                        >
                            Chọn hiển thị kết quả tìm kiếm
                        </Typography.Title>
                        <Divider style={{ margin: "10px 0" }} />

                        <Checkbox.Group
                            value={selectedColumns}
                            onChange={handleColumnChange}
                        >
                            <Row
                                gutter={[15, 10]}
                                style={{ paddingBottom: "10px" }}
                            >
                                {columns.map((col) =>
                                    col.dataIndex === "stt" ||
                                    col.render ? null : (
                                        <Col span={11}>
                                            <Checkbox
                                                key={col.key}
                                                value={col.dataIndex}
                                                defaultChecked={defaultSelectedColumns.includes(
                                                    col.dataIndex
                                                )}
                                            >
                                                {col.title}
                                            </Checkbox>
                                        </Col>
                                    )
                                )}
                            </Row>
                        </Checkbox.Group>
                    </div>
                </Drawer>
            </Card>

            {/*=============== MODAL THÊM MỚI LỆNH GIA CÔNG============= */}
            <Modal
                title={
                    eyeOnClicked
                        ? "Xem thông tin lệnh gia công"
                        : enterResultManu
                        ? "Nhập kết quả gia công"
                        : "Thêm mới lệnh gia công"
                }
                open={isModalManuOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={
                    // eyeOnClicked ? (
                    // <Space justifyContent="end">
                    //     <Button
                    //         key="back"
                    //         style={{
                    //             backgroundColor:
                    //                 "var(--footer-color-modal)",
                    //         }}
                    //         type="primary"
                    //         onClick={handleOk}
                    //     >
                    //         Hủy lệnh
                    //     </Button>
                    //     <Button
                    //         key="saveNContinue"
                    //         type="primary"
                    //         style={{
                    //             backgroundColor:
                    //                 "var(--footer-color-modal)",
                    //         }}
                    //         onClick={handleCancel}
                    //     >
                    //         Chỉnh sửa
                    //     </Button>
                    //     <Button
                    //         key="submit"
                    //         type="primary"
                    //         style={{
                    //             backgroundColor:
                    //                 "var(--footer-color-modal)",
                    //         }}
                    //         onClick={handleCancel}
                    //     >
                    //         Gửi duyệt
                    //     </Button>
                    //     <Button
                    //         key="submit"
                    //         type="primary"
                    //         style={{
                    //             backgroundColor:
                    //                 "var(--footer-color-modal)",
                    //         }}
                    //         onClick={handleCancel}
                    //     >
                    //         Hủy
                    //     </Button>
                    // </Space>
                    admin ? (
                        <Space justifyContent="end">
                            <Button
                                key="back"
                                style={{
                                    backgroundColor:
                                        "var(--footer-color-modal)",
                                }}
                                type="primary"
                                onClick={handleOk}
                            >
                                Phê Duyệt
                            </Button>
                            <Button
                                key="saveNContinue"
                                type="primary"
                                style={{
                                    backgroundColor:
                                        "var(--footer-color-modal)",
                                }}
                                onClick={handleCancel}
                            >
                                Từ chối
                            </Button>
                            <Button
                                key="submit"
                                type="primary"
                                style={{
                                    backgroundColor:
                                        "var(--footer-color-modal)",
                                }}
                                onClick={handleCancel}
                            >
                                Hủy
                            </Button>
                        </Space>
                    ) : enterResultManu ? (
                        <Space justifyContent="end">
                            {exportMaterials && (
                                <Button
                                    key="back"
                                    style={{
                                        backgroundColor:
                                            "var(--footer-color-modal)",
                                    }}
                                    type="primary"
                                    onClick={() => {
                                        setExportMaterials(!exportMaterials);
                                        setStartMachining(!startMachining);
                                    }}
                                >
                                    Xuất nguyên vật liệu gia công
                                </Button>
                            )}

                            {startMachining && (
                                <Button
                                    key="back"
                                    style={{
                                        backgroundColor:
                                            "var(--footer-color-modal)",
                                    }}
                                    type="primary"
                                    onClick={() => {
                                        setStartMachining(!startMachining);
                                        setCompleteMachining(
                                            !completeMachining
                                        );
                                    }}
                                >
                                    Bắt đầu gia công
                                </Button>
                            )}
                            {completeMachining && (
                                <Button
                                    key="back"
                                    style={{
                                        backgroundColor:
                                            "var(--footer-color-modal)",
                                    }}
                                    type="primary"
                                    onClick={() => {
                                        handleCancel();
                                        setStartMachining(false);
                                        setCompleteMachining(false);
                                    }}
                                >
                                    Hoàn Thành gia công
                                </Button>
                            )}

                            <Button
                                key="saveNContinue"
                                type="primary"
                                style={{
                                    backgroundColor:
                                        "var(--footer-color-modal)",
                                }}
                                onClick={handleCancel}
                            >
                                Hủy
                            </Button>
                        </Space>
                    ) : (
                        <Space justifyContent="end">
                            <Button
                                key="back"
                                style={{
                                    backgroundColor:
                                        "var(--footer-color-modal)",
                                }}
                                type="primary"
                                onClick={handleOk}
                            >
                                Lưu và đóng
                            </Button>
                            <Button
                                key="saveNContinue"
                                type="primary"
                                style={{
                                    backgroundColor:
                                        "var(--footer-color-modal)",
                                }}
                                onClick={handleCancel}
                            >
                                Lưu và tiếp tục
                            </Button>
                            <Button
                                key="submit"
                                type="primary"
                                style={{
                                    backgroundColor:
                                        "var(--footer-color-modal)",
                                }}
                                onClick={handleCancel}
                            >
                                Hủy
                            </Button>
                        </Space>
                    )
                }
                width={1220}
                style={{
                    top: 20,
                }}
            >
                <Card
                    className="styleCardManu"
                    size="small"
                    tabList={tabList}
                    activeTabKey={activeTabKey}
                    onTabChange={onTabChange}
                >
                    {contentList[activeTabKey]}
                </Card>
                <Divider />
            </Modal>

            {/* ============MOMAL PRINT ======================= */}
            <Modal
                open={isModalPrintOpen}
                title="In lệnh gia công"
                onCancel={handleCancelPrint}
                footer={
                    <Space>
                        <Button
                            type="primary"
                            style={{
                                backgroundColor: "var(--footer-color-modal)",
                            }}
                            onClick={handleOkPrint}
                        >
                            In
                        </Button>
                        <Button
                            type="primary"
                            style={{
                                backgroundColor: "var(--footer-color-modal)",
                            }}
                            onClick={handleCancelPrint}
                        >
                            Hủy
                        </Button>
                    </Space>
                }
            >
                <img
                    alt="example"
                    style={{
                        width: "100%",
                    }}
                    src={PrintPic}
                />
            </Modal>
        </Space>
    );
}

export default ManufactureOrder;
