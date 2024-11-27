import { ProductSchema } from "../../schema/products.schema";

interface Props {
    data: ProductSchema
}
const TableRow = ({ data }: Props) => {
    return (
        <>
            {Array.isArray(data) && data.map((product: ProductSchema, index) => (
                <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>{product.image}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.specialPrice}</td>
                    <td>{product.category}</td>
                    <td>{product.subcategory}</td>
                    <td>{product.remark}</td>
                    <td>{product.brand}</td>
                    <td>{product.shop}</td>
                    <td>{product.shopName}</td>
                    <td>{product.star}</td>
                    <td>{product.productCode}</td>
                    <td>{product.stock}</td>
                </tr>
            ))}
        </>
    )
}

export default TableRow