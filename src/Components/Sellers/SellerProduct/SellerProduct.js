import React from 'react';
import HeroSection from '../../About/HeroSection';
import ProductViewShop from '../../Shop/ViewShop/ProductViewShop';
import ShopSideBar from '../../Shop/ShopSideBar';

const SellerProduct = () => {
   const user = JSON.parse(localStorage.getItem("fresh_shop"));
   const shop_id = user.email;
    return (
      <div>
        <HeroSection text={'My Shop Product'}></HeroSection>
        <div class="shop-box-inner">
          <div class="container">
            <div class="row">
              <ProductViewShop shop_id={shop_id}></ProductViewShop>
              <ShopSideBar></ShopSideBar>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SellerProduct;