import { Product } from "@/redux/features/products/productSlice"
import { Table } from "react-bootstrap"
interface Props {
    content?: Product[]
}
const ProductTable = ({ content }: Props) => {
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Special Price</th>
                    <th>Category</th>
                    <th>Remark</th>
                    <th>Brand</th>
                    <th>Shop</th>
                    <th>Shop Name</th>
                    <th>Star</th>
                    <th>Product Code</th>
                    <th>Stock</th>
                    <th style={{ textAlign: "center" }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {content}
            </tbody>
        </Table>
    )
}

export default ProductTable