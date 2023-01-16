import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123"
          title="Black color smart Led Tv With 1 Year Warranty at Best Prices in India"
          price={100}
          rating={5}
          image="https://tiimg.tistatic.com/fp/1/007/411/black-color-smart-led-tv-with-1-year-warranty-810-w300.jpg"
        />

        <Product
          id="123"
          title="Lenovo IdeaPad Slim 3 Intel Celeron N4020 15.6 inches HD Business Laptop (4GB/256GB SSD/Windows 10 Home/Platinum Grey/1.7Kg), 81WQ003LIN"
          price={1200}
          rating={5}
          image="https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SY450_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123"
          title="boAt Airdopes 181 | Wireless Earbuds with 10mm Driver"
          price={140}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_eb862c0f-658f-43a2-99c2-65783233f592_600x.png?v=1641980344"
        />

        <Product
          id="123"
          title="Buy Crazy Penguin Full Length MidRise Regular Washed Jeans Blue for Boys (9-10 Years) online in India at best price from FirstCry.com ✓ Get up to 3% ..."
          price={20}
          rating={5}
          image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/9832754a.webp"
        />
        
        <Product
          id="123"
          title="Buy Crazy Penguin Full Length MidRise Regular Washed Jeans Blue for Boys (9-10 Years)"
          price={15}
          rating={5}
          image="https://m.media-amazon.com/images/I/71lDPJJ0sZL._UX522_.jpg"
        />
  
        <Product
          id="123"
          title="Buy Crazy Penguin Full Length MidRise Regular Washed Jeans Blue for Boys (9-10 Years) online in India at best price from FirstCry.com ✓ Get up to 3% ..."
          price={30}
          rating={5}
          image="https://m.media-amazon.com/images/I/61bmwT56eWL._UX679_.jpg"
        />


      </div>
    </div>
  );
}

export default Home;