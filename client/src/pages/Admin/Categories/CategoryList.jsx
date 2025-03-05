import { Table } from 'antd';
import { useEffect, useState } from 'react';
import api from '../../../services/api';

const columns = [
    {
        title : 'Image',
        dataIndex : 'img',
        width : "25%",
        render : (img, record) => (<img alt={`/${record.img}`} src={`/${record.img}`} />)
    },
    {
        title : 'Name',
        dataIndex : 'name',
        key : 'name'
    },
    {
        title : "Process",
        key : "process",
        render : () => (
            <>
                <button style={{padding:10, margin:10}} >Update</button>
                <button style={{padding:10, margin:10}} >Delete</button>
            </>
        )
    }
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

function CategoryList() {

    const [dataList, setDataList] = useState([]);

    const getCategories = async () => {
        try {
            const response = await api.get("/categories");
            setDataList(response.data);
        } catch (error) {
            console.error("Hata Detayı:", error.response?.data);
            alert(error.response?.data?.error || "Bir şeyler yanlış gitti..");
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <Table columns={columns} dataSource={dataList} onChange={onChange} />
        </>
    )
}

export default CategoryList