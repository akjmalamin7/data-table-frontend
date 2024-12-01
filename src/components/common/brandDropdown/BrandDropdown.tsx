import { useGetBrandsListQuery } from "@/redux/features/brands/brandsApi";
import ReuseableSelect from "@/shared/ui/reuseableSelect";
import React from "react";
interface Props {
  defaultSelectText?: string;
  value?: string;
  name?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
interface Brand {
  _id?: string;
  name?: string;
  image?: string;
}
const BrandDropdown = ({ defaultSelectText, value, name, className, onChange }: Props) => {
  const { data, error, isLoading } = useGetBrandsListQuery({
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
      size="lg"
      xsCol={12}
      mdCol={6}
      name={name}
      onSelect={onChange}
      selectedValue={value}
      className={className}
    >
      <option value="">{defaultSelectText}</option>
      {data?.data.map((brand: Brand) => (
        <option key={brand._id} value={brand._id}>
          {brand.name}
        </option>
      ))}
    </ReuseableSelect>
  );
};

export default BrandDropdown;
