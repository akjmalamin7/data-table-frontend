import { useUploadImageMutation } from "@/redux/features/image/imageAPI";
import ReuseableInput from "@/shared/ui/reuseableInput";
import React from "react";

interface Props {
  xsCol?: string;
  mdCol?: string;
  lgCol?: string;
  className?: string;
  size?: "sm" | "lg";
  name?: string;
  value?: string;
  setValue?: () => void;
}
const ImageUpload = ({
  xsCol,
  mdCol,
  lgCol,
  size = "lg",
  name,
  value,
  className,
  setValue,
}: Props) => {
  const [uploadImage, { isLoading, error }] = useUploadImageMutation();
  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);
        const { data } = await uploadImage(formData).unwrap();

        console.log("Image URL from server:", data?.imgUrl); // Debugging line

        if (data?.imgUrl) {
          setValue((prev) => ({
            ...prev,
            image: data.imgUrl,
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
    return (
      <ErrorMessage
        message={error.message || "An unexpected error occurred."}
      />
    );
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
