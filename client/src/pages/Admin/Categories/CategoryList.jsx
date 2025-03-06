import { Button, Table } from 'antd';
import { useEffect, useState } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import UpdateCategoryModal from './UpdateCategoryModal';
import DeleteCategoryButton from './DeleteCategoryButton';


function CategoryList() {

    const [dataList, setDataList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const getCategories = async () => {
        try {
            const response = await api.get("/categories");
            setDataList(response.data);
        } catch (error) {
            console.error("Hata Detayı:", error.response?.data);
            toast.error(error.response?.data?.error || "Bir şeyler yanlış gitti..");
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    const openUpdateModal = (category) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    }

    const columns = [
        {
            title: 'Image',
            dataIndex: 'img',
            width: "25%",
            render: (img, record) => (<img alt={`/${record.img}`} src={`/${record.img}`} style={{ width: "90px" }} />)
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: "50%"
        },
        {
            title: "Process",
            key: "process",
            width: "15%",
            render: (record) => (
                <div style={{ display: "flex", justifyContent: "space-evenly", marginRight: "10px" }}>
                    <Button color='cyan' variant='solid' onClick={() => openUpdateModal(record)} >Update</Button>
                    <DeleteCategoryButton categoryId={record._id} getCategories={getCategories} setDataList={setDataList} />
                </div>
            )
        }
    ];

    return (
        <>
            <h2>Category List</h2>
            <hr /><br />

            <Table columns={columns} dataSource={dataList} rowKey="_id" />

            <UpdateCategoryModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                selectedCategory={selectedCategory}
                getCategories={getCategories}
            />
        </>
    )
}

export default CategoryList