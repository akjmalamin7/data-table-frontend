import { useGetCategoriesListQuery } from "@/redux/features/categories/CategoriesApi";
import ReuseableSelect from "@/shared/ui/reuseableSelect";
import React from "react";
interface CategoryProps {
  _id?: string;
  name?: string;
  image?: string;
}
interface Props {
  defaultSelectText?: string;
  value?: string;
  name?: string;
  size?: "sm" | "lg";
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const CategoryDropdown = ({ defaultSelectText, value, name, className, size = "lg", onChange }: Props) => {
  
  const { data, error, isLoading } = useGetCategoriesListQuery({
    pageNo: 1,
    perPage: 50,
    searchKey: "0",
  });
  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <h3>An unexpected error occurred.</h3>;
  }

  if (data?.data.length === 0) {
    return <p>Category not found!</p>;
  }
  return (
    <ReuseableSelect
      size={size}
      xsCol={12}
      mdCol={6}
      name={name}
      onSelect={onChange}
      selectedValue={value}
      className={className}
    >
      <option value="">{defaultSelectText}</option>
      {data?.data.map((category: CategoryProps) => (
        <option key={category._id} value={category.name}>
          {category.name}
        </option>
      ))}
    </ReuseableSelect>
  );
};

export default CategoryDropdown;
