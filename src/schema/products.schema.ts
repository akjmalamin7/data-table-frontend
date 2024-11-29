export interface ProductSchema {
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
  name: string;
  image: string;
}
export interface BrandSchema {
  name: string;
  image: string;
}
