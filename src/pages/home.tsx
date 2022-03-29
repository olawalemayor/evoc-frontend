import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import firstSlide from "../assets/pictures/pexels-andrea-piacquadio-3769747.jpg";
import secondSlide from "../assets/pictures/pexels-andrea-piacquadio-919436.jpg";
import thirdSlide from "../assets/pictures/pexels-karolina-grabowska-5632371.jpg";
import PageSlider from "../common/slider";
import { ImageProps } from "../common/slider";
import CategoryBar from "../components/categoryBar";
import HeroGrids from "../components/heroSlides";
import HomeSidebar from "../components/homeSidebar";
import MobileHeroGrid from "../components/mobileGrid";
import GridContext from "../context/gridContext";
import { Product } from "../models/product";

export default function Home() {
  const images: ImageProps[] = [
    { id: 1, title: "", url: firstSlide, text: "" },
    { id: 2, title: "", url: secondSlide, text: "" },
    { id: 3, title: "", url: thirdSlide, text: "" },
  ];

  const [categories, setCategories] = useState([""]);
  const [products, setProducts] = useState([new Product()]);
  const [trendingProducts, setTrendingProducts] = useState([new Product()]);
  const endpoint = "https://fakestoreapi.com/";

  useEffect(() => {
    axios
      .get(endpoint + "products")
      .then((product) => setProducts(product.data))
      .catch((e) => {
        console.log("Eror: ", e.message);
      });
  }, [setProducts]);

  useEffect(() => {
    axios
      .get<string[]>(endpoint + "products/categories")
      .then(({ data }) => setCategories(data));
  }, [setCategories]);

  useEffect(() => {
    const allProducts = [...products];

    const trendingProducts = allProducts[0].id
      ? allProducts.filter((product) => {
          return product.rating.count > 100 && product.rating.count > 4;
        })
      : allProducts;

    setTrendingProducts(trendingProducts);
  }, [products, setTrendingProducts]);

  const getCategorizedProducts = (category: string) => {
    const allProducts = [...products];
    return allProducts[0].id
      ? allProducts.filter((product) => product.category === category)
      : allProducts;
  };

  return (
    <div className="home-section" id="home">
      {/* Hero section */}

      <div className="home-slider">
        <PageSlider id="homeCarousel" images={images} />
        <CategoryBar categories={categories} />
        <GridContext.Provider
          value={{
            gridClass: "hero-grids",
            gridWidth: 60,
            sectionTitle: "Trending Sales",
            singleBoxHeight: 250,
            singleBoxWidth: 100,
            visibleProducts: 5,
          }}
        >
          <HeroGrids products={trendingProducts} />
        </GridContext.Provider>
        <GridContext.Provider
          value={{
            gridClass: "",
            gridWidth: 100,
            sectionTitle: "Trending Sales",
            singleBoxHeight: 250,
            singleBoxWidth: 100,
            visibleProducts: 2,
          }}
        >
          <MobileHeroGrid products={trendingProducts} />
        </GridContext.Provider>
      </div>

      {/* Body */}
      {categories && (
        <div className="main-container">
          <div className="sections-container">
            {categories.map((category) => (
              <Fragment key={category}>
                <GridContext.Provider
                  value={{
                    gridClass: "",
                    gridWidth: 100,
                    sectionTitle: category.toUpperCase(),
                    singleBoxHeight: 150,
                    singleBoxWidth: 100,
                    visibleProducts: 3,
                    category: category,
                  }}
                >
                  <HeroGrids products={getCategorizedProducts(category)} />
                </GridContext.Provider>

                <GridContext.Provider
                  value={{
                    gridClass: "",
                    gridWidth: 100,
                    sectionTitle: category.toUpperCase(),
                    singleBoxHeight: 250,
                    singleBoxWidth: 100,
                    visibleProducts: 2,
                    category: category,
                  }}
                >
                  <MobileHeroGrid products={getCategorizedProducts(category)} />
                </GridContext.Provider>
              </Fragment>
            ))}
          </div>

          <div className="hide-mobile sidebar-container">
            <HomeSidebar />

            <HomeSidebar />
          </div>
        </div>
      )}
    </div>
  );
}
