import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import numberWithCommas from '../utils/numberWithCommas';

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <Link to={`/catalog/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
          {/* <img src={props.img02} alt="" /> */}
        </div>
        <div className="product-card__category">
          <div className="product-card__category__category">
            {props.category}
          </div>
          <div className="product-card__category__timetour">
            {props.timeTour}
          </div>
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <div className="product-card__price">
          {numberWithCommas(props.price)}VNĐ
          {/* <span className="product-card__price__old">
            <del>{numberWithCommas(399000)}</del>
            <del>399000</del>
          </span> */}
        </div>
      </Link>
      <div className="product-card__btn">
        <Button
          size="sm"
          icon="bx bx-cart"
          animate={true}
          // onClick={() => dispatch(set(props.slug))}
        >
          mua tour
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string.isRequired,
  timeTour: PropTypes.string,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
