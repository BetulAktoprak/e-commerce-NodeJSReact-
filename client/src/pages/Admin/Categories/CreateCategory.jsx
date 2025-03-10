import { Button, Form, Input } from 'antd';
import api from '../../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function CreateCategory() {
    const [form] = Form.useForm();
    const formLayout = "vertical";

    const navigate = useNavigate();

    const createCategory = async (values) => {
        try {
            await api.post("/categories", values);
            toast.success("Kategori başarıyla eklendi!");
            navigate("/admin/categories");
        } catch (error) {
            toast.error(error.response?.data?.error || "Bir hata oluştu..");
        }
    }
    return (
        <>
            <h2>Create Category Panel</h2>
            <hr /><br />
            <Form
                layout={formLayout}
                form={form}
                onFinish={createCategory}
            >
                <Form.Item label="Category Name" name="name">
                    <Input placeholder="Category name enter.." />
                </Form.Item>
                <Form.Item label="Category Image" name="img">
                    <Input placeholder="Category image enter.." />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType='submit'>Create</Button>
                </Form.Item>
            </Form>
        </>

    )
}

export default CreateCategory