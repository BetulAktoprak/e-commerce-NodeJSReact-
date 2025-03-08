import { Button } from "antd"
import { toast } from "react-toastify";
import api from "../../../services/api";

function DeleteUserButton({ getUsers, email }) {

    const deleteUser = async () => {

        const confirmDelete = window.confirm("Bu kullanıcıyı silmek istediğinize emin misiniz?");
        if (!confirmDelete) return;

        try {
            await api.delete(`/users/${email}`);
            console.log(email)
            toast.success("Kullanıcı başarıyla silindi!");
            getUsers();
        } catch (error) {
            toast.error(error.response?.data?.error || "Silme sırasında hata oluştu.");
        }
    }

    return (
        <>
            <Button type="primary" danger onClick={deleteUser} >Delete</Button>
        </>
    )
}

export default DeleteUserButton