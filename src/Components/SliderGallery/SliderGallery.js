import React from 'react';
import { Link } from 'react-router-dom';

const SliderGallery = () => {
    return (
      <div className="instagram-box">
        <div className="main-instagram owl-carousel owl-theme" >
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-01.jpg" alt="" />
              <div className="hov-in">
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-02.jpg" alt="" />
              <div className="hov-in">
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-03.jpg" alt="" />
              <div className="hov-in">
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-04.jpg" alt="" />
              <div className="hov-in">
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-05.jpg" alt="" />
              <div className="hov-in">
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-06.jpg" alt="" />
              <div className="hov-in">
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-07.jpg" alt="" />
              <div className="hov-in">
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-08.jpg" alt="" />
              <div className="hov-in">
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-09.jpg" alt="" />
              <div className="hov-in">
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ins-inner-box">
              <img src="images/instagram-img-05.jpg" alt="" />
              <div className="hov-in">
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SliderGallery;