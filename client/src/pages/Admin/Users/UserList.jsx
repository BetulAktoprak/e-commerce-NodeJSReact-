import { toast } from "react-toastify";
import api from "../../../services/api"
import { useEffect, useState } from "react";
import { Button, Table } from "antd";
import UpdateUserModal from "./UpdateUserModal";
import DeleteUserButton from "./DeleteUserButton";

function UserList() {

    const [dataList, setDataList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const getUsers = async () => {
        try {
            const response = await api.get("/users");
            setDataList(response.data);
        } catch (error) {
            console.error("Hata Detayı:", error.response?.data);
            toast.error(error.response?.data?.error || "Liste getirilemedi..");
        }
    }

    useEffect(() => {
        getUsers();
    },[]);

    const openUpdateModal = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    }

    const columns = [
        
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            width: "30%"
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: "35%"
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
            width: "17%"
        },
        {
            title: "Process",
            key: "process",
            render: (record) => (
                <div style={{ display: "flex", justifyContent: "space-evenly", marginRight: "10px" }}>
                    <Button color="cyan" variant="solid" onClick={() => openUpdateModal(record)}>Update</Button>
                    <DeleteUserButton getUsers={getUsers} email={record.email} />
                    
                </div>
            )
        }
    ];

  return (
    <>
        <h2>User List</h2>
        <hr /><br />
         <Table columns={columns} dataSource={dataList} rowKey="_id" />

         <UpdateUserModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            selectedUser={selectedUser}
            getUsers={getUsers}
            setDataList={setDataList}
         />
    </>
  )
}

export default UserList