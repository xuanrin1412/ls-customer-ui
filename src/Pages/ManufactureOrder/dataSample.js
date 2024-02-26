export const dataSource = [
    {
        stt: 1,
        loaiHinh: "Thép hình",
        chiNhanh: "Bắc Nam",
        maLenhGiaCong: "GC01",
        ngayGiaCong: "22/11/2023",
        loaiGiaCong: "Không theo đơn hàng",
        maDonHang: "",
        khachHang: "",
        nguoiYeuCau: "Ms.Vân",
        donViThucHien: "Kho 9D",
        quyTrinhPheDuyet: "Duyệt gia công",
        trangThaiPheDuyet: "Mới tạo",
        trangThaiGiaCong: "",
        phieuXuatKho: "",
        phieuNhapKho: "",
        maDonGiaCong: "",
        ngayTao: "",
        ngayCapNhat: "",
        ghiChu: "",
        nguoiTao: "",
        nguoiCapNhat: "",
    },
    {
        stt: 2,
        loaiHinh: "Thép cuộn",
        chiNhanh: "Bắc Nam",
        maLenhGiaCong: "GC02",
        ngayGiaCong: "22/11/2023",
        loaiGiaCong: "Không theo đơn hàng",
        maDonHang: "DH001",
        khachHang: "Nippon Stell",
        nguoiYeuCau: "Ms.Hồng Anh",
        donViThucHien: "Kho 9D",
        quyTrinhPheDuyet: "Duyệt gia công",
        trangThaiPheDuyet: "Từ Chối",
        trangThaiGiaCong: "",
        phieuXuatKho: "",
        phieuNhapKho: "",
        maDonGiaCong: "",
        ngayTao: "",
        ngayCapNhat: "",
        ghiChu: "",
        nguoiTao: "",
        nguoiCapNhat: "",
    },
    {
        stt: 3,
        loaiHinh: "Thép tấm",
        chiNhanh: "Bắc Nam",
        maLenhGiaCong: "GC03",
        ngayGiaCong: "22/11/2023",
        loaiGiaCong: "Không theo đơn hàng",
        maDonHang: "",
        khachHang: "",
        nguoiYeuCau: "Ms.Hồng Anh",
        donViThucHien: "Kho 9D",
        quyTrinhPheDuyet: "Duyệt gia công",
        trangThaiPheDuyet: "Mới tạo",
        trangThaiGiaCong: "",
        phieuXuatKho: "",
        phieuNhapKho: "",
        maDonGiaCong: "",
        ngayTao: "",
        ngayCapNhat: "",
        ghiChu: "",
        nguoiTao: "",
        nguoiCapNhat: "",
    },
    {
        stt: 4,
        loaiHinh: "Thép hình",
        chiNhanh: "Bắc Nam",
        maLenhGiaCong: "GC04",
        ngayGiaCong: "22/11/2023",
        loaiGiaCong: "Không theo đơn hàng",
        maDonHang: "DH002",
        khachHang: "Thép Hòa Phát",
        nguoiYeuCau: "Ms.Hồng Anh",
        donViThucHien: "Kho 9D",
        quyTrinhPheDuyet: "Duyệt gia công",
        trangThaiPheDuyet: "Mới tạo",
        trangThaiGiaCong: "",
        phieuXuatKho: "",
        phieuNhapKho: "",
        maDonGiaCong: "",
        ngayTao: "",
        ngayCapNhat: "",
        ghiChu: "",
        nguoiTao: "",
        nguoiCapNhat: "",
    },
    {
        stt: 5,
        loaiHinh: "Thép cuộn",
        chiNhanh: "Bắc Nam",
        maLenhGiaCong: "GC05",
        ngayGiaCong: "22/11/2023",
        loaiGiaCong: "Không theo đơn hàng",
        maDonHang: "",
        khachHang: "",
        nguoiYeuCau: "Ms.Hồng Anh",
        donViThucHien: "Kho 9D",
        quyTrinhPheDuyet: "Duyệt gia công",
        trangThaiPheDuyet: "Mới tạo",
        trangThaiGiaCong: "",
        phieuXuatKho: "",
        phieuNhapKho: "",
        maDonGiaCong: "",
        ngayTao: "",
        ngayCapNhat: "",
        ghiChu: "",
        nguoiTao: "",
        nguoiCapNhat: "",
    },
];

// const columns  = [
//     {
//         title: "STT",
//         dataIndex: "stt",
//         key: "stt",
//     },
//     {
//         render: (_, record) =>
//             dataSource.length ? (
//                 <Flex horizontal>
//                     <EyeOutlined
//                         onClick={() => showModal(record)}
//                         style={{
//                             color: `var(--primary-color)`,
//                             fontSize: 20,
//                         }}
//                     />
//                     <EditOutlined
//                         style={{
//                             color: `var(--primary-color)`,
//                             fontSize: 20,
//                             marginLeft: 5,
//                         }}
//                     />
//                 </Flex>
//             ) : null,
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Loại hình
//             </span>
//         ),
//         dataIndex: "loaiHinh",
//         key: "loaiHinh",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Chi nhánh
//             </span>
//         ),
//         dataIndex: "chiNhanh",
//         key: "chiNhanh",
//     },

//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Mã lệnh gia công
//             </span>
//         ),
//         dataIndex: "maLenhGiaCong",
//         key: "maLenhGiaCong",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Ngày gia công
//             </span>
//         ),
//         dataIndex: "ngayGiaCong",
//         key: "ngayGiaCong",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Loại gia công
//             </span>
//         ),
//         dataIndex: "loaiGiaCong",
//         key: "loaiGiaCong",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Mã đơn hàng
//             </span>
//         ),
//         dataIndex: "maDonHang",
//         key: "maDonHang",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Khách hàng
//             </span>
//         ),
//         dataIndex: "khachHang",
//         key: "khachHang",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Người yêu cầu
//             </span>
//         ),
//         dataIndex: "nguoiYeuCau",
//         key: "nguoiYeuCau",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Đơn vị thực hiện
//             </span>
//         ),
//         dataIndex: "donViThucHien",
//         key: "donViThucHien",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Quy trình phê duyệt
//             </span>
//         ),
//         dataIndex: "quyTrinhPheDuyet",
//         key: "quyTrinhPheDuyet",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Trạng thái phê duyệt
//             </span>
//         ),
//         dataIndex: "trangThaiPheDuyet",
//         key: "trangThaiPheDuyet",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Trạng thái gia công
//             </span>
//         ),
//         dataIndex: "trangThaiGiaCong",
//         key: "trangThaiGiaCong",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Phiếu xuất kho
//             </span>
//         ),
//         dataIndex: "phieuXuatKho",
//         key: "phieuXuatKho",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Mã đơn gia công
//             </span>
//         ),
//         dataIndex: "maDonGiaCong",
//         key: "maDonGiaCong",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Ngày tạo
//             </span>
//         ),
//         dataIndex: "ngayTao",
//         key: "ngayTao",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Ngày cập nhật
//             </span>
//         ),
//         dataIndex: "ngayCapNhat",
//         key: "ngayCapNhat",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Ghi Chú
//             </span>
//         ),
//         dataIndex: "ghiChu",
//         key: "ghiChu",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Người tạo
//             </span>
//         ),
//         dataIndex: "nguoiTao",
//         key: "nguoiTao",
//     },
//     {
//         title: (
//             <span
//                 style={{
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 Người cập nhật
//             </span>
//         ),
//         dataIndex: "nguoiCapNhat",
//         key: "nguoiCapNhat",
//     },
// ];

export const optionsArrange = [
    { value: "Chi nhánh", label: "Chi nhánh" },
    { value: "Người yêu cầu", label: "Người yêu cầu" },
    { value: "Mã đơn gia công", label: "Mã đơn gia công" },
    { value: "Ngày gia công", label: "Ngày gia công" },
    { value: "Loại gia công", label: "Loại gia công" },
    { value: "Mã đơn hàng", label: "Mã đơn hàng" },
    { value: "Đơn vị thực hiện", label: "Đơn vị thực hiện" },
    { value: "Trạng thái gia công", label: "Trạng thái gia công" },
    { value: "Trạng thái phê duyệt", label: "Trạng thái phê duyệt" },
    { value: "Ghi chú", label: "Ghi chú" },
    { value: "Ngày tạo", label: "Ngày tạo" },
    { value: "Người tạo", label: "Người tạo" },
    { value: "Ngày cập nhật", label: "Ngày cập nhật" },
    { value: "Người cập nhật", label: "Người cập nhật" },
    { value: "Loại hình", label: "Loại hình" },
    { value: "Phiếu xuất kho", label: "Phiếu xuất kho" },
    { value: "Phiếu nhập kho", label: "Phiếu nhập kho" },
];

export const defaultSelectedColumns = [
    "stt",
    "loaiHinh",
    "chiNhanh",
    "maLenhGiaCong",
    "ngayGiaCong",
    "loaiGiaCong",
    "maDonHang",
    "khachHang",
    "nguoiYeuCau",
    "donViThucHien",
    "quyTrinhPheDuyet",
    "trangThaiPheDuyet",
    "phieuXuatKho",
    "phieuNhapKho",
];

export const dataAddMaterials = [
    {
        key: "1",
        xoa: 1,
        stt: 1,
        maSanPham: "Selection", //you can edit this
        quyCach: "5.8 x 1500",
        xuatXu: "tonghua",
        macThep: "",
        soLuong: "23", //you can edit this ,
        trongLuong: "28,500,00",
        doDaiDuKien: "417.31", //you can edit this ,
        doDai: "",
        khoRong: "",
        doThucTeMin: "",
        doThucTeMax: "",
        tong: "",
        dungSai: "3%",
        phieuXuatKho: "",
        ghiChu: "",
    },
];

export const dataProductAProcess = [
    {
        stt: 1, //you can edit this
        quyCachTheoDonHang: "6lyx1500x6000",
        quyCachCat: "6.000",
        soLuong: "69", //you can edit this ,
        trongLuong: "25,500,00",
        dungSai: "3%",
        phieuNhapKho: "",
        ghiChu: "",
    },
    {
        stt: 2, //you can edit this
        quyCachTheoDonHang: "Phế liệu",
        quyCachCat: "",
        donViTinh: null,
        soLuong: "", //you can edit this ,
        dvt: null,
        trongLuong: "",
        dungSai: "",
        phieuNhapKho: "",
        ghiChu: "",
    },
];
