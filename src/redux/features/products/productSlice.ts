import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  _id: string;
  name: string;
  price: string;
  specialPrice: string;
  image: string;
  category: string;
  subcategory: string;
  remark: string;
  brand: string;
  shop: string;
  shopName: string;
  star: string;
  productCode: string;
  stock: string;
}

interface ProductStateProps {
  total: number;
  productList: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductStateProps = {
  total: 0,
  productList: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setTotal(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },
    setAllProducts(state, action: PayloadAction<Product[]>) {
      state.productList = action.payload; // This should update the `productList`
    },
  },
});

export const { setTotal, setAllProducts } = productSlice.actions;
export default productSlice.reducer;
