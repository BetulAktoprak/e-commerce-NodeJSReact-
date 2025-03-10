import { Button, Checkbox, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const colorOptions = ["White", "Pink", "Purple", "Red", "Green", "Blue", "Brown", "Grey", "Black"];
    const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL", "Standard"];

    const getCategories = async () => {
        try {
            const response = await api.get("categories");
            setCategories(response.data);
        } catch (error) {
            toast.error(error.response?.data?.error || "Bir hata oluştu..");
        }
    }

    const addProduct = async (values) => {
        const { colors, sizes, ...restValue } = values;
        const imageLinks = values.images.split("\n").map(link => link.trim());
        try {
            await api.post("/products", {
                ...restValue, colors, sizes, images: imageLinks
            });
            toast.success("Ürün başarıyla eklendi.");
            form.resetFields();
            navigate("/admin/products");
        } catch (error) {
            toast.error(error.response?.data?.error || "Bir hata oluştu..");
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <>
            <h2>Create Product Panel</h2>
            <hr /><br />
            <Form
                layout="vertical"
                form={form}
                initialValues={{
                    colors: ["White"]
                }}
                onFinish={addProduct}
            >

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Product Name" name="name" rules={[{ required: true, message: "Enter product name." }]}>
                            <Input placeholder="Product name enter.." />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="StockCode" name="stockCode" rules={[{ required: true, message: "Enter product stockCode." }]}>
                            <Input placeholder="Product stockCode enter.." />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Price" name="price" rules={[{ required: true, message: "Enter product price." }]}>
                            <InputNumber placeholder="Product price enter.." style={{ width: "100%" }} min={0} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Stock" name="stock" rules={[{ required: true, message: "Enter product stock." }]}>
                            <InputNumber placeholder="Product stock enter.." style={{ width: "100%" }} min={0} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Discount" name="discount">
                            <InputNumber placeholder="Product discount enter.." style={{ width: "100%" }} min={0} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Categories" name="category" rules={[{ required: true, message: "Select a category." }]}>
                            <Select placeholder="Select a category.." style={{ width: "100%" }}>
                                {categories.map((category) => (
                                    <Select.Option key={category._id} value={category._id}>{category.name}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>


                <Form.Item label="Colors" name="colors">
                    <Checkbox.Group options={colorOptions} />
                </Form.Item>

                <Form.Item label="Sizes" name="sizes">
                    <Checkbox.Group options={sizeOptions} />
                </Form.Item>


                <Form.Item label="Description" name="description" rules={[{ required: true, message: "Enter product description." }]}>
                    <TextArea placeholder="Product description enter.." rows={2} />
                </Form.Item>

                <Form.Item label="Product Images" name="images" rules={[{ required: true, message: "Enter product image." }]}>
                    <TextArea placeholder="Product images enter.." rows={2} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Create</Button>
                </Form.Item>

            </Form>
        </>
    )
}

export default CreateProduct