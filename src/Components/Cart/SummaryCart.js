import React from 'react';

const SummaryCart = () => {
    return (
    <div class="row my-5">
        <div class="col-lg-8 col-sm-12"></div>
        <div class="col-lg-4 col-sm-12">
            <div class="order-box">
                <h3>Order summary</h3>
                <div class="d-flex">
                    <h4>Sub Total</h4>
                    <div class="ml-auto font-weight-bold"> $ 130 </div>
                </div>
                <div class="d-flex">
                    <h4>Discount</h4>
                    <div class="ml-auto font-weight-bold"> $ 40 </div>
                </div>
                <hr class="my-1"/>
                <div class="d-flex">
                    <h4>Coupon Discount</h4>
                    <div class="ml-auto font-weight-bold"> $ 10 </div>
                </div>
                <div class="d-flex">
                    <h4>Tax</h4>
                    <div class="ml-auto font-weight-bold"> $ 2 </div>
                </div>
                <div class="d-flex">
                    <h4>Shipping Cost</h4>
                    <div class="ml-auto font-weight-bold"> Free </div>
                </div>
                <hr/>
                <div class="d-flex gr-total">
                    <h5>Grand Total</h5>
                    <div class="ml-auto h5"> $ 388 </div>
                </div>
                <hr/> </div>
        </div>
        <div class="col-12 d-flex shopping-box"><a href="checkout.html" class="ml-auto btn hvr-hover">Checkout</a> </div>
    </div>
    );
};

export default SummaryCart;