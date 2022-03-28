export interface ProductModel {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductSlideProps {
  products: ProductModel[];
}

export class Product {
  id = 0;
  title = "";
  price = 0;
  description = "";
  category = "";
  image = "";
  rating = {
    rate: 0,
    count: 0,
  };
}
