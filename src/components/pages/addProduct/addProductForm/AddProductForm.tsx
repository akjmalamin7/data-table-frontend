import ReuseableInput from "@/shared/ui/reuseableInput";
import React, { ChangeEvent, FormEvent } from "react";
import { Button, Col, Row } from "react-bootstrap";
import BrandDropdown from "../../../common/brandDropdown";
import CategoryDropdown from "../../../common/categoryDropdown";
import { ImageUpload } from "../../../common/imageUpload";
import ImageViewer from "../../../common/ImageViewer";
import style from "./addProductForm.module.css";
interface Props {
  categoryValues?: string;
  subcategoryValue?: string;
  brandValue?: string;
  isLoading?: boolean;
  imagePath?: string;
  setValues?: () => void;
  handleChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
}
const AddProductForm = ({
  categoryValues,
  subcategoryValue,
  brandValue,
  isLoading = false,
  imagePath,
  setValues,
  handleChange,
  handleSubmit,
}: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <ReuseableInput
          xsCol={12}
          mdCol={6}
          className="mb-3"
          name="name"
          placeHolder="Product Name"
          onInput={handleChange}
        />
        <ReuseableInput
          xsCol={12}
          mdCol={6}
          className="mb-3"
          name="price"
          placeHolder="Price"
          onInput={handleChange}
        />
        <ReuseableInput
          xsCol={12}
          mdCol={6}
          className="mb-3"
          name="specialPrice"
          placeHolder="Special price"
          onInput={handleChange}
        />
        <CategoryDropdown
          className={style.option}
          defaultSelectText="Select category"
          name="category"
          value={categoryValues}
          onChange={handleChange}
        />
        <CategoryDropdown
          className={style.option}
          defaultSelectText="Select category"
          name="subcategory"
          value={subcategoryValue}
          onChange={handleChange}
        />
        <ReuseableInput
          xsCol={12}
          mdCol={6}
          className="mb-3"
          name="remark"
          placeHolder="Remark"
          onInput={handleChange}
        />
        <BrandDropdown
          name="brand"
          defaultSelectText="Select brand"
          value={brandValue}
          className={style.option}
          onChange={handleChange}
        />

        <ReuseableInput
          xsCol={12}
          mdCol={6}
          className="mb-3"
          name="shop"
          placeHolder="Shop"
          onInput={handleChange}
        />
        <ReuseableInput
          xsCol={12}
          mdCol={6}
          className="mb-3"
          name="shopName"
          placeHolder="Shop name"
          onInput={handleChange}
        />
        <ReuseableInput
          xsCol={12}
          mdCol={6}
          className="mb-3"
          name="star"
          placeHolder="Star"
          onInput={handleChange}
        />
        <ReuseableInput
          xsCol={12}
          mdCol={6}
          className="mb-3"
          name="productCode"
          placeHolder="Product code"
          onInput={handleChange}
        />
        <ReuseableInput
          xsCol={12}
          mdCol={6}
          className="mb-3"
          name="stock"
          placeHolder="Stock"
          onInput={handleChange}
        />

        {imagePath ? (
          <ImageViewer image={imagePath} />
        ) : (
          <ImageUpload
            xsCol="12"
            mdCol="12"
            className="mb-3"
            name="image"
            setValue={() => setValues}
          />
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
  );
};

export default AddProductForm;
