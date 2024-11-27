import PageHeader from "@/components/pageHeader"
import { useProductAddMutation } from "@/redux/features/products/productAPIS"
import { ProductSchema } from "@/schema/products.schema"
import { ChangeEvent, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const INIT_DATA: ProductSchema = {
    name: "",
    price: "",
    specialPrice: "",
    image: "",
    category: "",
    subcategory: "",
    remark: "",
    brand: "",
    shop: "",
    shopName: "",
    star: "",
    productCode: "",
    stock: "",
}

const AddProducts = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState(INIT_DATA)
    const [productAdd, { isLoading, error }] = useProductAddMutation()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await productAdd(values).unwrap()
            navigate("/products")
        } catch (err) {
            console.error("Error adding product:", err)
        }
    }

    return (
        <Container style={{ maxWidth: "940px", margin: "0 auto", marginTop: '50px' }} as="div">
            <PageHeader pageTitle="Add Products" buttonText1="Product list" onButton1={() => navigate("/products")} />
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="name" onChange={handleChange} placeholder="Product name" />
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="price" onChange={handleChange} placeholder="Price" />
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="specialPrice" onChange={handleChange} placeholder="Special price" />
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="category" onChange={handleChange} placeholder="Category" />
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="subcategory" onChange={handleChange} placeholder="Sub category" />
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="remark" onChange={handleChange} placeholder="Remark" />
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="brand" onChange={handleChange} placeholder="brand" />
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="shop" onChange={handleChange} placeholder="shop" />
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="shopName" onChange={handleChange} placeholder="shop name" />
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="star" onChange={handleChange} placeholder="Star" />
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="productCode" onChange={handleChange} placeholder="Product code" />
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="stock" onChange={handleChange} placeholder="Stock" />
                    </Col>
                    <Col xs="12" md="12" className="mb-3">
                        <Form.Control size="lg" type="text" name="image" onChange={handleChange} placeholder="Image" />
                    </Col>
                    <Col className="d-flex justify-content-end mt-2">
                        <Button variant="dark" className="px-4" size="md" type="submit" disabled={isLoading}>
                            {isLoading ? "Adding..." : "Add"}
                        </Button>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}

export default AddProducts
