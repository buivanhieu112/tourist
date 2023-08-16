import React, { useCallback, useEffect, useState } from 'react';

import data from '../assets/fake-data/data';
import category from '../assets/fake-data/category';

import Helmet from '../components/Helmet';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';
import InfinityList from '../components/InfinityList';

function Catalog() {
  const initFilter = {
    category: [],
  };
  const productList = data.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case 'CATEGORY':
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case 'CATEGORY':
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        default:
      }
    }
  };

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const clearFilter = () => setFilter(initFilter);

  return (
    <Helmet title="Danh Sách Tour">
      {console.log(filter)}
      <div className="catalog">
        <div className="catalog__filter">
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Danh mục</div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect('CATEGORY', input.checked, item)
                    }
                    checked={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button size="sm" onClick={clearFilter}>
                xóa bộ lọc
              </Button>
            </div>
          </div>
        </div>
        <div className="catalog__content">
          <InfinityList data={products} />
        </div>
      </div>
    </Helmet>
  );
}

export default Catalog;
