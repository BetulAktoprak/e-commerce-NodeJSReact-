import { Button, Checkbox, Col, Form, Input, InputNumber, Modal, Row, Select } from "antd"
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { toast } from "react-toastify";
import TextArea from "antd/es/input/TextArea";

function UpdateProductModal({isModalOpen, setIsModalOpen, selectedProduct, getProducts}) {

    const [form] = Form.useForm();
    const [categories, setCategories] = useState([]);
    const colorOptions = ["White", "Pink", "Purple", "Red", "Green", "Blue", "Brown", "Grey", "Black"];
    const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL", "Standard"];

    const getCategories = async () => {
        try {
            const response = await api.get("/categories");
            setCategories(response.data);
        } catch (error) {
            toast.error(error.response?.data?.error || "Bir hata oluştu..");
        }
    }

    useEffect(() => {
        if(selectedProduct){
            form.setFieldsValue(selectedProduct);
            getCategories();
            console.log(selectedProduct)
        }
    }, [selectedProduct]);

    const updateProduct = async () => {
        try {
            const values = await form.validateFields();
            await api.put(`/products/${selectedProduct._id}`, values);
            toast.success("Ürün başarıyla güncellendi.");
            setIsModalOpen(false);
            getProducts();
        } catch (error) {
            toast.error(error.response?.data?.error || "Lütfen zorunlu alanları doldurun.");
        }
    }

  return (
    <>
        <Modal
            title="Update Product"
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            footer={[
                <Button key="cancel" onClick={() => setIsModalOpen(false)} >Close</Button>,
                <Button key="submit" type="primary" onClick={updateProduct} >Update</Button>
            ]}
        >
            <Form form={form} layout="vertical" >
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
            </Form>
        </Modal>
    </>
  )
}

export default UpdateProductModal