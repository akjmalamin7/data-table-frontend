import { Product } from "@/redux/features/products/productSlice";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React from "react";
import { Table } from "react-bootstrap";
import { ProductSchema } from "../../../schema/products.schema";
import DataTableLoader from "../dataTableloader";
import TableRow from "../tableRow";

interface Props {
  error?: FetchBaseQueryError | SerializedError | undefined;
  isLoading?: boolean;
  data: Product[];
}
const ProductTable = ({ data, error, isLoading }: Props) => {
  let content = null;
  if (isLoading) {
    content = (
      <tr>
        <td colSpan={14}>
          <DataTableLoader />
        </td>
      </tr>
    );
  }
  if (error) {
    content = (
      <tr>
        {" "}
        <td colSpan={14}>Error occur</td>
      </tr>
    );
  }
  if (!isLoading && !error && data?.length > 0) {
    content = (
      <>
        {Array.isArray(data) &&
          data?.map((product: ProductSchema, index) => <TableRow key={product._id} product={product} serial={index} />)}
      </>
    );
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Special Price</th>
          <th>Category</th>
          <th>Remark</th>
          <th>Brand</th>
          <th>Shop</th>
          <th>Shop Name</th>
          <th>Star</th>
          <th>Product Code</th>
          <th>Stock</th>
          <th style={{ textAlign: "center" }}>Action</th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </Table>
  );
};

export default ProductTable;
