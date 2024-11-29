import BrandDropdown from "@/components/brandDropdown";
import CategoryDropdown from "@/components/categoryDropdown";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import ImageUpload from "@/components/imageUpload/ImageUpload";
import PageHeader from "@/components/pageHeader";
import { useProductAddMutation } from "@/redux/features/products/productAPIS";
import { ProductSchema } from "@/schema/products.schema";
import ReuseableInput from "@/shared/ui/reuseableInput";
import { ChangeEvent, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./addProduct.module.css";
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

const AddProducts = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(INIT_DATA);
  const [productAdd, { isLoading, error }] = useProductAddMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
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
  if (error) return <ErrorMessage message={error.message} />;
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
          <ReuseableInput
            xsCol="12"
            mdCol="6"
            className="mb-3"
            name="name"
            placeHolder="Product Name"
            onInput={handleChange}
          />
          <ReuseableInput
            xsCol="12"
            mdCol="6"
            className="mb-3"
            name="price"
            placeHolder="Price"
            onInput={handleChange}
          />
          <ReuseableInput
            xsCol="12"
            mdCol="6"
            className="mb-3"
            name="specialPrice"
            placeHolder="Special price"
            onInput={handleChange}
          />
          <CategoryDropdown
            className={style.option}
            defaultSelectText="Select category"
            name="category"
            value={values.category}
            onChange={handleChange}
          />
          <CategoryDropdown
            className={style.option}
            defaultSelectText="Select category"
            name="subcategory"
            value={values.subcategory}
            onChange={handleChange}
          />
          <ReuseableInput
            xsCol="12"
            mdCol="6"
            className="mb-3"
            name="remark"
            placeHolder="Remark"
            onInput={handleChange}
          />
          <BrandDropdown
            name="brand"
            defaultSelectText="Select brand"
            value={values.brand}
            className={style.option}
            onChange={handleChange}
          />

          <ReuseableInput
            xsCol="12"
            mdCol="6"
            className="mb-3"
            name="shop"
            placeHolder="Shop"
            onInput={handleChange}
          />
          <ReuseableInput
            xsCol="12"
            mdCol="6"
            className="mb-3"
            name="shopName"
            placeHolder="Shop name"
            onInput={handleChange}
          />
          <ReuseableInput
            xsCol="12"
            mdCol="6"
            className="mb-3"
            name="star"
            placeHolder="Star"
            onInput={handleChange}
          />
          <ReuseableInput
            xsCol="12"
            mdCol="6"
            className="mb-3"
            name="productCode"
            placeHolder="Product code"
            onInput={handleChange}
          />
          <ReuseableInput
            xsCol="12"
            mdCol="6"
            className="mb-3"
            name="stock"
            placeHolder="Stock"
            onInput={handleChange}
          />
          <ImageUpload
            xsCol="12"
            mdCol="12"
            className="mb-3"
            name="image"
            setValue={setValues}
          />

          {values.image && (
            <Col xs="12" className="text-center mb-3">
              <img
                src={`/images/${values.image}`}
                alt="Uploaded Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  objectFit: "contain",
                }}
              />
            </Col>
          )}

          <Col className="d-flex justify-content-end mt-2">
            <Button
              variant="dark"
              className="px-4"
              size="md"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add"}
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default AddProducts;
