import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import PageHeader from "@/components/pageHeader";
import PageLoader from "@/components/pageLoader";
import {
  useProductDetailsQuery,
  useProductUpdateMutation,
} from "@/redux/features/products/productAPIS";
import { ProductSchema } from "@/schema/products.schema";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

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
};

const UpdateProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState(INIT_DATA);
  const [productUpdate, { isLoading }] = useProductUpdateMutation();
  const {
    data: product,
    isLoading: isProductLoading,
    error,
  } = useProductDetailsQuery(id);

  useEffect(() => {
    if (id && product) {
      setValues((prev) => ({
        ...prev,
        ...product.data,
      }));
    }
  }, [id, product]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await productUpdate(values).unwrap();
      navigate("/products");
      refetch();
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };
  // Loading and error handling
  if (isLoading || isProductLoading) return <PageLoader />;
  if (error)
    return (
      <div>
        <ErrorMessage message={error.message} />
      </div>
    );
  return (
    <Container
      style={{ maxWidth: "940px", margin: "0 auto", marginTop: "50px" }}
      as="div"
    >
      <PageHeader
        pageTitle="Add Products"
        buttonText1="Product list"
        onButton1={() => navigate("/products")}
      />
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs="12" md="6" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.name}
              name="name"
              onChange={handleChange}
              placeholder="Product name"
            />
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.price}
              name="price"
              onChange={handleChange}
              placeholder="Price"
            />
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.specialPrice}
              name="specialPrice"
              onChange={handleChange}
              placeholder="Special price"
            />
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.category}
              name="category"
              onChange={handleChange}
              placeholder="Category"
            />
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.subcategory}
              name="subcategory"
              onChange={handleChange}
              placeholder="Sub category"
            />
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.remark}
              name="remark"
              onChange={handleChange}
              placeholder="Remark"
            />
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.brand}
              name="brand"
              onChange={handleChange}
              placeholder="brand"
            />
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.shop}
              name="shop"
              onChange={handleChange}
              placeholder="shop"
            />
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.shopName}
              name="shopName"
              onChange={handleChange}
              placeholder="shop name"
            />
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.star}
              name="star"
              onChange={handleChange}
              placeholder="Star"
            />
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.productCode}
              name="productCode"
              onChange={handleChange}
              placeholder="Product code"
            />
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.stock}
              name="stock"
              onChange={handleChange}
              placeholder="Stock"
            />
          </Col>
          <Col xs="12" md="12" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              value={values.image}
              name="image"
              onChange={handleChange}
              placeholder="Image"
            />
          </Col>
          <Col className="d-flex justify-content-end mt-2">
            <Button
              variant="dark"
              className="px-4"
              size="md"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Product"}
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default UpdateProducts;
