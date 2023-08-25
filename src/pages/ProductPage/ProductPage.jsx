import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../../data/logements.json";
import './productPage.scss'

import Rating from "../../components/Rating/Rating.jsx";
import Host from "../../components/Host/Host.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Tags from "../../components/Tags/Tags.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";

const ProductPage = () => {
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()
  const { productId } = useParams();



  useEffect(() => {
      const data = products.find((product) => product.id === productId);
      console.log(data)
  if (data === null) {
    return navigate('/pas-trouve')
  }
  setProduct(data)
  }, [])

  if (product === null) return <div>Loader</div>

  const { title, location, rating, host, equipments, description, pictures } =
    product;


  return (
    <div className="product-page">
      <Slider slides={pictures} />
      <div className="product-page-content">
        <div className="product-page-informations">
          <h1 className="product-page-title">{title}</h1>
          <p className="product-page-location">{location}</p>
          <div className="product-page-tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="product-page-rating-and-host">
          <Host host={host} />
          <Rating rating={rating} />
        </div>
      </div>
      <div className="product-page-dropdowns">
        <Collapse title="Description" content={description} />
        <Collapse title="Equipement" content={equipments} />
      </div>
    </div>
  );
};

export default ProductPage;
