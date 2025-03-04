import { Menu } from "antd";
import {
    AppstoreOutlined,
    DashboardOutlined,
    TeamOutlined,
    GiftOutlined,
    BarcodeOutlined,
    AppstoreAddOutlined,
    UnorderedListOutlined,
    PlusCircleOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";


function AdminMenu() {

    const navigate = useNavigate();

    const items = [
        {
            key: '1',
            icon: <DashboardOutlined />,
            label: 'DashBoard',
            path: "/admin",
            onClick: () => {
                navigate("/admin")
            }
        },
        {
            key: '2',
            icon: <AppstoreOutlined />,
            label: 'Category',
            path: "/",
            children: [
                {
                    key: '2-1',
                    icon: <UnorderedListOutlined />,
                    label: 'Category List',
                    path: "/admin/categories",
                    onClick: () => {
                        navigate("/admin/categories")
                    }
                },
                {
                    key: '2-2',
                    icon: <AppstoreAddOutlined />,
                    label: 'Add Category',
                    path: "/admin/category/create",
                    onClick: () => {
                        navigate("/admin/category/create")
                    }
                }
            ]
        },
        {
            key: '3',
            icon: <GiftOutlined />,
            label: 'Product',
            path: "/",
            children : [
                {
                    key : "3-1",
                    icon : <UnorderedListOutlined />,
                    label : "Product List",
                    path : "/admin/products",
                    onClick : () => {
                        navigate("/admin/products")
                    }
                },
                {
                    key : "3-2",
                    icon : <PlusCircleOutlined />,
                    label : "Add Product",
                    path : "/admin/product/create",
                    onClick : () => {
                        navigate("/admin/product/create")
                    }
                }
            ]
        },
        {
            key: '4',
            icon: <TeamOutlined />,
            label: 'User',
            path: "/",
            children : [
                {
                    key : "4-1",
                    icon : <UnorderedListOutlined />,
                    label : "User List",
                    path : "/admin/users",
                    onClick: () => {
                        navigate("/admin/users")
                    }
                },
                {
                    key : "4-2",
                    icon : <UserAddOutlined />,
                    label : "Add User",
                    path : "/admin/user/create",
                    onClick: () => {
                        navigate("/admin/user/create")
                    }
                }
            ]
        },
        {
            key: '5',
            icon: <BarcodeOutlined />,
            label: 'Coupon',
            path: "/",
            children : [
                {
                    key : "5-1",
                    icon : <UnorderedListOutlined />,
                    label : "Coupon List",
                    path : "/admin/coupons",
                    onClick: () => {
                        navigate("/admin/coupons")
                    }
                },
                {
                    key : "5-2",
                    icon : <PlusCircleOutlined />,
                    label : "Add Coupon",
                    path : "/admin/coupon/create",
                    onClick: () => {
                        navigate("/admin/coupon/create")
                    }
                }
            ]
        }
    ];

    return (
        <Menu
            mode="inline"
            theme="dark"
            items={items}
        />
    )
}

export default AdminMenu