import React, {Component} from 'react'

import Slider from "react-slick";

import  "../../../public/assets/slick/slick.css"
import  "../../../public/assets/slick/slick-theme.css" 

class Informational extends Component{
    render() {
        var settings = {
            dots: true,
            arrows:false,
            infinite: true,
            autoplay: true,
            rtl: true,
            pauseOnHover: false,
            vertical:true,
            verticalSwiping: true,
            speed: 2000,
            autoplaySpeed:3000,
            useTransform: true,
            easing: true,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div>
                <Slider className="walk_through_slider walkslider" {...settings}>
                    <div>
                        <div style={{height: '565px'}}>
                            <div className="slider-row">
                                <div className="slider-badge">
                                    <p className="slider-badge-no">1</p>
                                </div>
                                <div className="slider-text">
                                    <h2 className="slider-title">Plan Strategy</h2>
                                    <p className="intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                    <img src="../public/assets/images/walk_through_illustration_2.svg" alt="walk_through_illustration" className="walk_through_illustration" />
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div>
                        <div style={{height: '565px'}}>
                            <div className="slider-row">
                                <div className="slider-badge">
                                    <p className="slider-badge-no">2</p>
                                </div>
                                <div className="slider-text">
                                    <h2 className="slider-title">Data Analysis</h2>
                                    <p className="intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                    <img src="../public/assets/images/walk_through_illustration_3.svg" alt="walk_through_illustration" className="walk_through_illustration" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{height: '565px'}}>
                            <div className="slider-row">
                                <div className="slider-badge">
                                    <p className="slider-badge-no">3</p>
                                </div>
                                <div className="slider-text">
                                    <h2 className="slider-title">Manage</h2>
                                    <p className="intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                    <img src="../public/assets/images/walk_through_illustration_4.svg" alt="walk_through_illustration" className="mt-40 walk_through_illustration" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{height: '565px'}}>
                            <h1 className="hero-title">.SFA 360</h1>
                            <h4 className="hero-subtitle">One Stop Solution to Manage daily call Report</h4>
                            <p className="intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                            <img src="../public/assets/images/walk_through_illustration_1.svg" alt="walk_through_illustration" className="walk_through_illustration margin-auto-1" />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Informational