import React from "react";
import Product from "../Product/Product";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"
          alt=""></img>
        <div className='home__row'>
          {/* Product */}
          <Product id='12321341'
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={55.60}
            image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
            rating={5} />
          {/* Product */}
          <Product id='49538094'
            title='Kenwood Kmix Stand Nixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Liter Glass Bowl'
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71HquSRunlL._AC_SY450_.jpg" />
        </div>
        <div className='home__row'>
          {/* Product */}
          <Product id='4903850'
            title='Garmin vivoactive 4S, Smaller-Sized GPS Smartwatch, Features Music, Body Energy Monitoring, Animated Workouts, Pulse Ox Sensors And More, Black'
            price={45.98}
            rating={4}
            image={"https://images-na.ssl-images-amazon.com/images/I/51OCzuItD9L._AC_SX679_.jpg"} />
          {/* Product */}
          <Product id='23445930'
            title='Echo (3rd Gen) bundle with Amazon Smart Plug - Sandstone'
            image={'https://images-na.ssl-images-amazon.com/images/I/61ZoZfgAbKL._AC_SX569_.jpg'}
            rating={2}
            price={59.78} />
          {/* Product */}
          <Product id='3254354345'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
            image={"https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SX466_.jpg"}
            rating={5}
            price={500.45} />
        </div>

        <div className='home__row'>
          {/* Product */}
          <Product id=''
            title='Philips Brilliance 499P9H 49" SuperWide Curved Monitor, Dual QHD 5120x1440 32:9, USB-C connectivity and built-in KVM Switch, Pop-Up Webcam, Height Adjustable, LightSensor, 4Yr Advance Replacement Warr'
            image="https://images-na.ssl-images-amazon.com/images/I/614TzTrRbrL._AC_SX679_.jpg" price={8963.5} rating={4} />
        </div>

      </div>
    </div>
  );
}

export default Home;
