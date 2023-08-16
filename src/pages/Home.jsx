import React from 'react';

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Grid from '../components/Grid';
import Section, { SectionTitle, SectionBody } from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import ProductCard from '../components/ProductCard';

import policy from '../assets/fake-data/policy';
import heroSliderData from '../assets/fake-data/hero-slider';
// import productData from '../assets/fake-data/product';
import { Link } from 'react-router-dom';

import productData from '../assets/fake-data/data';
import numberWithCommas from '../utils/numberWithCommas';

function Home() {
  return (
    <Helmet title="Trang chủ">
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
      <Section>
        <SectionTitle>Top Tour 2022*</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                category={item.category}
                timeTour={item.timeTour}
                img01={item.image}
                name={item.title}
                price={numberWithCommas(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Top tour đang hot</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
}

export default Home;
