import { useEffect, useState } from "react"
import api from '../../../services/api';
import { toast } from 'react-toastify';

function Categories() {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await api.get("/categories");
                setCategories(response.data);
            } catch (error) {
                toast.error(error.response.data.error || "Bir hata oluştu..");
            }
        }
        getCategories();
    }, []);
    return (
        <>
            <section className="categories">
                <div className="container">
                    <div className="section-title">
                        <h2>All Categories</h2>
                        <p>Summer Collection New Morden Design</p>
                    </div>
                    <ul className="category-list">
                        {
                            categories.map(category => (
                                <li key={category._id} className="category-item">
                                    <a href="#">
                                        <img src={category.img} alt={category.name} className="category-image" />
                                        <span className="category-title">{category.name}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Categories