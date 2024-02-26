import { Flex, Modal, Select, Space, Upload } from "antd";
import { useState, useRef } from "react";
import { PlusOutlined } from "@ant-design/icons";
import JoditEditor from "jodit-react";

const getBase64 = (file) => {
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

export default function MoreInfo() {
    // ==================Tab Thông tin thêm (Ảnh , Mô tả)=====================
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const [fileList, setFileList] = useState([]);
    const handleCancel2 = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(
            file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
        );
    };
    const handleChange = ({ fileList: newFileList }) =>
        setFileList(newFileList);
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: "none",
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    //================== PARAGRAPH EDITING==========================
    const editor = useRef(null);
    const [content, setContent] = useState("");
    return (
        <>
            <Space direction="horizone" size={50}>
                <Flex gap={40}>
                    <span style={{ whiteSpace: "nowrap" }}>
                        Tập tin đính kèm
                    </span>
                    <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {fileList.length <= 0 ? uploadButton : uploadButton}
                    </Upload>
                </Flex>
                <Space size={40}>
                    <span>Người tạo</span>
                    <Select
                        className="selectStyle"
                        style={{ width: "220px" }}
                    />
                </Space>
            </Space>
            <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => setContent(newContent)}
            />

            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel2}
            >
                <img
                    alt="example"
                    style={{
                        width: "100%",
                    }}
                    src={previewImage}
                />
            </Modal>
        </>
    );
}
