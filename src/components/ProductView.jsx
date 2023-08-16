import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid';
import Button from './Button';
import numberWithCommas from '../utils/numberWithCommas';

const ProductView = (props) => {
  const product = props.product;

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const [quantityChildren, setQuantityChildren] = useState(0);

  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const updateQuantityChildren = (type) => {
    if (type === 'plus') {
      setQuantityChildren(quantityChildren + 1);
    } else {
      setQuantityChildren(quantityChildren - 1 < 0 ? 0 : quantityChildren - 1);
    }
  };

  useEffect(() => {
    setQuantity(1);
    setQuantityChildren(0);
  }, [product]);

  useEffect(() => {});

  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = () => {};

  const goToCart = () => {};

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <Grid col={1} mdCol={1} smCol={1} gap={20}>
            <div className="product__images__list__item">
              <div>
                <p>
                  Thời gian:<b>{product.timeTour}</b>
                </p>
                <p>
                  Phương tiện:<b> Đi về bằng xe</b>
                </p>
              </div>
              <div>
                <p>
                  Điểm xuất phát: <b>TP.HCM</b>
                </p>
                <p>
                  Điểm đến: <b>{product.destination}</b>
                </p>
              </div>
            </div>
          </Grid>
          <div className="product__images__main">
            <img src={product.image} alt="" />
          </div>
          <div
            className={`product-description ${
              descriptionExpand ? 'expand' : ''
            }`}
          >
            <div className="product-description__title">Chương trình tour</div>
            <div
              className="product-description__content"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            <div className="product-description__toggle">
              <Button
                size="sm"
                onClick={() => setDescriptionExpand(!descriptionExpand)}
              >
                {descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {numberWithCommas(product.price)} VNĐ
          </span>
        </div>
        <div className="product__info__item">
          <span className="product__info__item__day">
            <p className="product__info__item__day__item">
              Ngày đi: <b>{product.dayStart}</b>
            </p>
            <p className="product__info__item__day__item">
              Ngày về: <b>{product.dayEnd}</b>
            </p>
            <p className="product__info__item__day__item">
              Thời gian:<b>{product.timeTour}</b>
            </p>
          </span>
        </div>
        <div className="product__info__item">
          <span className="product__info__item__time"></span>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Người lớn(*)</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity('minus')}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity('plus')}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Trẻ em(-40%)</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantityChildren('minus')}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantityChildren}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantityChildren('plus')}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <span className="product__info__item__total-price">Tổng:</span>
        </div>

        <div className="product__info__item">
          <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
          <Button onClick={() => goToCart()}>mua ngay</Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductView;
