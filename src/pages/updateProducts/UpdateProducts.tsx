import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";
import PageHeader from "@/components/common/pageHeader";
import PageLoader from "@/components/common/pageLoader";
import UpdateProductForm from "@/components/pages/updateProductForm";
import {
  useProductDetailsQuery,
  useProductUpdateMutation,
} from "@/redux/features/products/productAPIS";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { INIT_ADD_PRODUCT_DATA } from "../addProducts/addProdcuts.schema";

const UpdateProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState(INIT_ADD_PRODUCT_DATA);
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
        pageTitle="Update Products"
        buttonText1="Product list"
        onButton1={() => navigate("/products")}
      />
      <UpdateProductForm
        values={values}
        setValues={setValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default UpdateProducts;
