import { Table } from "antd";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import api from '../../../services/api';
import Columns from "./Columns";
import UpdateProductModal from "./UpdateProductModal";

function ProductList() {

    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const getProducts = async () => {
        try {
            const [categoryResponse, productResponse] = await Promise.all([
                api.get("/categories"),
                api.get("/products")
            ]);
            if (!categoryResponse.data || !productResponse.data) {
                throw new Error("Veri getirilirken sorun meydana geldi.");
            }
            const dataSource = productResponse.data.map(product => {
                const category = categoryResponse.data.find(cat => cat._id === product.category);
                return { ...product, categoryName: category ? category.name : "" }
            });
            setProducts(dataSource);

        } catch (error) {
            console.error("Hata Detayı:", error.response?.data);
            toast.error(error.response?.data?.error || "Bir şeyler yanlış gitti..");
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const openUpdateModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    }

    return (
        <>
            <h2>Product List</h2>
            <hr /><br />

            <Table dataSource={products} columns={Columns(openUpdateModal)} rowKey='_id' />

            <UpdateProductModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                selectedProduct={selectedProduct}
                getProducts={getProducts}
            />
        </>
    )
}

export default ProductList