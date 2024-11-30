export interface ProductSchema {
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
export interface CategorySchema {
  _id: string;
  name: string;
  image: string;
}
export interface BrandSchema {
  _id: string;
  name: string;
  image: string;
}
