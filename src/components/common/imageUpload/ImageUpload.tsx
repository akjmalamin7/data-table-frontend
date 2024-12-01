import { useUploadImageMutation } from "@/redux/features/image/imageAPI";
import { ProductSchema } from "@/schema/products.schema";
import ReuseableInput from "@/shared/ui/reuseableInput";
import React, { ChangeEvent } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

interface Props {
  xsCol?: number;
  mdCol?: number;
  lgCol?: number;
  className?: string;
  size?: "sm" | "lg";
  name?: string;
  value?: string;
  setValue?: (prev: ProductSchema) => void;
}
const ImageUpload = ({ xsCol, mdCol, lgCol, size = "lg", name, value, className, setValue }: Props) => {
  const [uploadImage, { isLoading, error }] = useUploadImageMutation();
  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);
        const { data } = await uploadImage(formData).unwrap();
        if (data?.imgUrl && setValue) {
          setValue((prev) => ({
            ...prev,
            image: data?.imgUrl,
          }));
        }
      } catch (err) {
        console.error("Error uploading image:", err);
      }
    }
  };
  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <ErrorMessage message={"Error"} />;
  }
  return (
    <ReuseableInput
      xsCol={xsCol}
      mdCol={mdCol}
      lgCol={lgCol}
      type="file"
      name={name}
      value={value}
      size={size}
      className={className}
      onInput={handleImageUpload}
    />
  );
};

export default ImageUpload;
