import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import image from "../../assets/banner.png";
import products from "../../data/logements.json";
import marketdata from "../../data/aboutData";
import Banner from '../../components/Banner/Banner'
import Thumbnails from "../../components/Thumbnails/Thumbnails";

const slogan = marketdata.slogan;

const Products = () => {
  return (
    <div className="home">
      <div>
        <Banner image={image} title={slogan} />
      </div>{" "}
      <div className='home-display'>
        <section className="home-products">
          {products.map((product) => {
            return (
              <article className="product" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <Thumbnails image={product.cover} title={product.title} />
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Products;