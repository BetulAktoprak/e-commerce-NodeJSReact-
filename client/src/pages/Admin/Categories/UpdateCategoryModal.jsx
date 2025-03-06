import { Button, Form, Input, Modal } from "antd";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";

function UpdateCategoryModal({ isModalOpen, setIsModalOpen, selectedCategory, getCategories }) {

    const [form] = Form.useForm();

    useEffect(() => {
        if (selectedCategory) {
            form.setFieldsValue(selectedCategory);
        }
    }, [selectedCategory, form]);

    const handleUpdate = async () => {
        try {
            const values = await form.validateFields();
            await api.put(`/categories/${selectedCategory._id}`, values);
            toast.success("Kategori başarıyla güncellendi!");
            setIsModalOpen(false);
            getCategories();
        } catch (error) {
            toast.error(error.response?.data?.error || "Güncelleme sırasında hata oluştu.");
        }
    }

    return (
        <>
            <Modal
                title="Update Category"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={[
                    <Button key="cancel" onClick={() => setIsModalOpen(false)}>Close</Button>,
                    <Button key="submit" type='primary' onClick={handleUpdate}>Update</Button>
                ]}
            >
                <Form form={form} layout='vertical'>
                    <Form.Item name="name" label="Category Name" rules={[{ required: true, message: "Enter the category name!" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="img" label="Image URL">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default UpdateCategoryModal