import { toast } from "react-toastify";
import api from "../../../services/api";
import { Button } from "antd";

function DeleteCategoryButton({ categoryId, getCategories, setDataList }) {

    const deleteCategory = async () => {

        const confirmDelete = window.confirm("Bu kategoriyi silmek istediğinize emin misiniz?");
        if (!confirmDelete) return;

        try {
            await api.delete(`/categories/${categoryId}`)
            toast.success("Kategori başarıyla silindi!");
            setDataList((prevList) => prevList.filter((item) => item._id !== categoryId));
            getCategories();
        } catch (error) {
            toast.error(error.response?.data?.error || "Silme sırasında hata oluştu.");
        }
    }


    return (
        <>
            <Button color='danger' variant='solid' onClick={deleteCategory} >Delete</Button>
        </>
    )
}

export default DeleteCategoryButton