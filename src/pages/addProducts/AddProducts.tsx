import AddProductForm from "@/components/addProductForm";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import PageHeader from "@/components/pageHeader";
import { useProductAddMutation } from "@/redux/features/products/productAPIS";
import { ChangeEvent, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { INIT_ADD_PRODUCT_DATA } from "./addProdcuts.schema";

const AddProducts = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(INIT_ADD_PRODUCT_DATA);
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
      <AddProductForm
        categoryValues={values.category}
        subcategoryValue={values.subcategory}
        brandValue={values.brand}
        isLoading={isLoading}
        imagePath={values.image}
        setValues={setValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default AddProducts;
