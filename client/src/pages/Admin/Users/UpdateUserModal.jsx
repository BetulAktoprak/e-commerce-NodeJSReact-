import { Button, Form, Input, Modal } from "antd"
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useEffect } from "react";

function UpdateUserModal({ isModalOpen, setIsModalOpen, selectedUser, getUsers, setDataList }) {

    const [form] = Form.useForm();

    useEffect(() => {
        if (selectedUser) {
            form.setFieldsValue(selectedUser);
        }
    }, [selectedUser]);

    const handleUpdate = async () => {
        try {
            const values = await form.validateFields();
            await api.put(`/users/${selectedUser._id}`, values);
            toast.success("Kullanıcı başarıyla güncellendi!");

            setIsModalOpen(false);
            setDataList((prevList) => prevList.map(user =>
                user._id === selectedUser._id ? { ...user, ...values } : user
            ));
            getUsers();
        } catch (error) {
            toast.error(error.response?.data?.error || "Güncelleme sırasında hata oluştu.");
        }
    }

    return (
        <>
            <Modal
                title="Update User"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={[
                    <Button key="cancel" onClick={() => setIsModalOpen(false)}>Close</Button>,
                    <Button key="submit" type='primary' onClick={handleUpdate}>Update</Button>
                ]}
            >
                <Form form={form} layout='vertical'>
                    <Form.Item name="username" label="User Name" rules={[{ required: true, message: "Enter the user name!" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true, message: "Enter the email!" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="role" label="Role" >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default UpdateUserModal