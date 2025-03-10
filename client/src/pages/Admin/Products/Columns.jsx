import { Button } from "antd";

const Columns = () => [
    {
        title: 'Images',
        dataIndex: 'images',
        key: 'images',
        render : (img, record) => (
            <img src={`/${record.images[0]}`} alt="Product Image" style={{ width: "80px" }} />
        )
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Category',
        dataIndex: 'categoryName',
        key: 'categoryName'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price'
    },
    {
        title: 'Discount',
        dataIndex: 'discount',
        key: 'discount'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'Colors',
        dataIndex: 'colors',
        key: 'colors',
        render : (colors) => (
            <div style={{display:"flex", flexWrap:"wrap"}}>
                {
                    colors.map((color, index) => (
                        <div key={index} style={{
                            width:"20px",
                            height:"20px",
                            borderRadius:"50%",
                            backgroundColor: color,
                            border:"1px solid black",
                            margin:"1px"
                        }}></div>
                    ))
                }
            </div>
        )
    },
    {
        title: 'Sizes',
        dataIndex: 'sizes',
        key: 'sizes',
        render : (sizes) => (
            <div>
                {
                    sizes.map((size, index) => (
                        <p style={{textAlign:"center", backgroundColor:"#DDD", margin:"1px"}} key={index}>{size.toUpperCase()}</p>
                    ))
                }
            </div>
        )
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
        key: 'stock'
    },
    {
        title: 'StockCode',
        dataIndex: 'stockCode',
        key: 'stockCode'
    },
    {
        title: "Process",
        key: "process",
        width: "15%",
        render: () => (
            <div style={{ display: "flex", flexDirection:"column", gap:"10px",  padding:"15px" }}>
                <Button color='cyan' variant='solid' >Update</Button>
                <Button color='danger' variant='solid' >Delete</Button>
            </div>
        )
    }
];

export default Columns;