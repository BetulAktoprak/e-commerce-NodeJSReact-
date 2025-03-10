import { Table } from "antd";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import api from '../../../services/api';
import Columns from "./Columns";

function ProductList() {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const [categoryResponse, productResponse] = await Promise.all([
                api.get("/categories"),
                api.get("/products")
            ]);
            if (!categoryResponse.data || !productResponse.data) {
                throw new Error("Veriler alınamadı.");
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

    return (
        <>
            <h2>Product List</h2>
            <hr /><br />

            <Table dataSource={products} columns={Columns()} rowKey='_id' />
        </>
    )
}

export default ProductList