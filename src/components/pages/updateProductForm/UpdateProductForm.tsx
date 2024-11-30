import BrandDropdown from "@/components/common/brandDropdown";
import CategoryDropdown from "@/components/common/categoryDropdown";
import { ImageUpload } from "@/components/common/imageUpload";
import ImageViewer from "@/components/common/ImageViewer";
import { ProductSchema } from "@/schema/products.schema";
import ReuseableInput from "@/shared/ui/reuseableInput";
import React, { ChangeEvent, FormEvent } from "react";
import { Button, Col, Row } from "react-bootstrap";
import style from "./updateProductForm.module.css";
interface Props {
  isLoading?: boolean;
  imagePath?: string;
  values?: ProductSchema;
  setValues?: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
}
const UpdateProductForm = ({
  values,
  isLoading,
  imagePath,
  setValues,
  handleChange,
  handleSubmit,
}: Props) => {
  console.log(values);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Row>
          <ReuseableInput
            xsCol={12}
            mdCol={6}
            className="mb-3"
            name="name"
            value={values?.name}
            placeHolder="Product Name"
            onInput={handleChange}
          />
          <ReuseableInput
            xsCol={12}
            mdCol={6}
            className="mb-3"
            name="price"
            value={values?.price}
            placeHolder="Price"
            onInput={handleChange}
          />
          <ReuseableInput
            xsCol={12}
            mdCol={6}
            className="mb-3"
            name="specialPrice"
            value={values?.specialPrice}
            placeHolder="Special price"
            onInput={handleChange}
          />

          <CategoryDropdown
            className={style.option}
            defaultSelectText="Select category"
            name="category"
            size="lg"
            value={values?.category}
            onChange={handleChange}
          />
          <CategoryDropdown
            className={style.option}
            defaultSelectText="Select subcategory"
            name="subcategory"
            size="lg"
            value={values?.subcategory}
            onChange={handleChange}
          />
          <ReuseableInput
            xsCol={12}
            mdCol={6}
            size="lg"
            className="mb-3"
            name="remark"
            value={values?.remark}
            placeHolder="Remark"
            onInput={handleChange}
          />
          <BrandDropdown
            name="brand"
            defaultSelectText="Select brand"
            value={values?.brand}
            className={style.option}
            onChange={handleChange}
          />
          <ReuseableInput
            xsCol={12}
            mdCol={6}
            className="mb-3"
            name="shop"
            value={values?.shop}
            placeHolder="Shop"
            onInput={handleChange}
          />
          <ReuseableInput
            xsCol={12}
            mdCol={6}
            className="mb-3"
            name="shopName"
            value={values?.shopName}
            placeHolder="Shop name"
            onInput={handleChange}
          />
          <ReuseableInput
            xsCol={12}
            mdCol={6}
            className="mb-3"
            name="star"
            value={values?.star}
            placeHolder="Star"
            onInput={handleChange}
          />
          <ReuseableInput
            xsCol={12}
            mdCol={6}
            className="mb-3"
            name="productCode"
            value={values?.productCode}
            placeHolder="Product code"
            onInput={handleChange}
          />
          <ReuseableInput
            xsCol={12}
            mdCol={6}
            className="mb-3"
            name="stock"
            value={values?.stock}
            placeHolder="Stock"
            onInput={handleChange}
          />
          <ImageUpload
            xsCol="12"
            mdCol="12"
            className="mb-3"
            name="image"
            setValue={() => setValues}
          />

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
      {values?.image && <ImageViewer image={values?.image} />}
      {imagePath && <ImageViewer image={imagePath} />}
    </>
  );
};

export default UpdateProductForm;
