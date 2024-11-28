import { useProductDeleteMutation } from "@/redux/features/products/productAPIS";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductSchema } from "../../schema/products.schema";
import style from "./tableRow.module.css";
interface Props {
    data: ProductSchema[]
}
const TableRow = ({ data }: Props) => {
    const [productDelete, { isLoading }] = useProductDeleteMutation()
    const handleDelete = async (id) => {
        try {
            await productDelete(id).unwrap();
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    }
    return (
        <>
            {Array.isArray(data) && data.map((product: ProductSchema, index) => (
                <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>
                        <div className={style.image}>
                            <Image src={`/images/${product.image}`} width={45} />
                        </div>
                    </td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.specialPrice}</td>
                    <td>{product.category}</td>
                    <td>{product.remark}</td>
                    <td>{product.brand}</td>
                    <td>{product.shop}</td>
                    <td>{product.shopName}</td>
                    <td>{product.star}</td>
                    <td>{product.productCode}</td>
                    <td>{product.stock}</td>
                    <td>
                        <div className={style.buttons}>
                            <Link to={`/products/update/${product._id}`} className="btn btn-success btn-sm link" style={{ fontSize: "12px", padding: "3px 9px", display: "flex", alignItems: "center" }}>Edit</Link>
                            <Button size="sm" variant="danger" onClick={() => handleDelete(product._id)} disabled={isLoading} style={{ fontSize: "12px", padding: "3px 9px" }}>Delete</Button>
                        </div>
                    </td>
                </tr >
            ))}
        </>
    )
}

export default TableRow