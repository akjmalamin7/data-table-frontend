import PageHeader from "@/components/pageHeader"
import { useGetBrandsListQuery } from "@/redux/features/brands/brandsApi"
import { useGetCategoriesListQuery } from "@/redux/features/categories/CategoriesApi"
import { useUploadImageMutation } from "@/redux/features/image/imageAPI"
import { useProductAddMutation } from "@/redux/features/products/productAPIS"
import { ProductSchema } from "@/schema/products.schema"
import { ChangeEvent, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import style from "./addProduct.module.css"
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
    const [uploadImage, { isLoading: imageLoading, error: imageError }] = useUploadImageMutation()

    const [pageNo, setPageNo] = useState(1);
    const [perPage, setPerPage] = useState(50);
    const [searchKey, setSearchKey] = useState(0);

    const { data: categoriesList, error: categoriesError, isLoading: categoriesLoading } = useGetCategoriesListQuery({
        pageNo: pageNo,
        perPage: perPage,
        searchKey: searchKey,
    });
    const { data: brandsList, error: brandsError, isLoading: brandsLoading } = useGetBrandsListQuery({
        pageNo: pageNo,
        perPage: perPage,
        searchKey: searchKey,
    });


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append("image", file);
                const { data } = await uploadImage(formData).unwrap();

                console.log("Image URL from server:", data?.imgUrl); // Debugging line

                if (data?.imgUrl) {
                    setValues((prev) => ({
                        ...prev,
                        image: data.imgUrl,
                    }));
                }
            } catch (err) {
                console.error("Error uploading image:", err);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await productAdd(values).unwrap();
            navigate("/products");
        } catch (err) {
            console.error("Error adding product:", err);
        }
    };


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
                        <Form.Select
                            name="category"
                            onChange={handleChange}
                            value={values.category}
                            className={style.option}
                        >
                            <option value="">Select Category</option>
                            {categoriesList?.data?.map((category: any) => (
                                <option key={category._id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>

                    <Col xs="12" md="6" className="mb-3">
                        <Form.Select
                            name="subcategory"
                            onChange={handleChange}
                            value={values.subcategory}
                            className={style.option}
                        >
                            <option value="">Sub sub category</option>
                            {categoriesList?.data?.map((category: any) => (
                                <option key={category._id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Control size="lg" type="text" name="remark" onChange={handleChange} placeholder="Remark" />
                    </Col>
                    <Col xs="12" md="6" className="mb-3">
                        <Form.Select
                            name="brand"
                            onChange={handleChange}
                            value={values.brand}
                            className={style.option}
                        >
                            <option value="">Select Brand</option>
                            {brandsList?.data?.map((brand: any) => (
                                <option key={brand._id} value={brand.id}>
                                    {brand.name}
                                </option>
                            ))}
                        </Form.Select>
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
                        <Form.Control size="lg" type="file" name="image" onChange={handleImageUpload} />
                    </Col>
                    {values.image && (
                        <Col xs="12" className="text-center mb-3">
                            <img
                                src={`/images/${values.image}`}
                                alt="Uploaded Preview"
                                style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "contain" }}
                            // crossOrigin="anonymous"
                            />
                        </Col>
                    )}


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
