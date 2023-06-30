import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Products = () => {
  const products = [
    {
      title: 'Product 5',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo fugiat aliquid minima. Magnam laboriosam dolor ut. Corporis nihil molestias, ipsa veniam sint facere.',
      price: '29.99',
      src: 'https://images.unsplash.com/photo-1655563096407-42bf664e9b9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Product 1',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo fugiat aliquid minima. Magnam laboriosam dolor ut. Corporis nihil molestias, ipsa veniam sint facere.',
      price: '9.99',
      src: 'https://images.unsplash.com/photo-1663025042626-6f0d925c6b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    },
    {
      title: 'Product 2',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo fugiat aliquid minima.',
      price: '14.99',
      src: 'https://images.unsplash.com/photo-1655394009750-b6cfc0b9455f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    },
    {
      title: 'Product 3',
      description: 'Lorem, ipsum dolor sit amet.',
      price: '19.99',
      src: 'https://images.unsplash.com/photo-1655394009794-df4f7cd8582a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
    },
    {
      title: 'Product 4',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo fugiat aliquid minima. Magnam.',
      price: '24.99',
      src: 'https://images.unsplash.com/photo-1655241406148-93853da337ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,

          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ProductCard = ({ product }) => {
    const { title, description, price, src } = product;
    return (
      <div className="relative mx-5 my-9">
        <div
          className={`relative h-96 w-full bg-cover bg-center`}
          style={{
            backgroundImage: `url(${src})`,
          }}
        ></div>
        <div className="bg-neutral-50 p-5 z-1 shadow-xl">
          <h4 className="text-neutral-900  text-lg font-bold mt-3 mb-5 uppercase text-center tracking-widest">
            {title}
          </h4>
          <p className="text-neutral-900 font-serif text-justify leading-8 text-lg">{description}</p>
          <p className="leading-8 text-end text-lg font-bold text-orange-800 tracking-widest">{price}€</p>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div id="produtos" className="mx-9">
        <div>
          <h2 className="text-4xl md:text-5xl leading-tighter tracking-wider my-9 md:mt-0 font-heading text-red-800 dark:text-orange-200">
            Produtos
          </h2>
          <Slider className="max-w-6xl mx-auto" {...settings}>
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;
