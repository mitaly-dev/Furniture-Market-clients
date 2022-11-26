import React from 'react';
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
            image:"https://i.ibb.co/rFSxhHZ/spacejoy-Rq-O6kwm4t-ZY-unsplash.jpg",
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: "https://i.ibb.co/McgcXpd/spacejoy-Yn-LJ3r-M4-Vt-I-unsplash.jpg",
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: "https://i.ibb.co/5MWh0z2/r-architecture-TRCJ-87-Yoh0-unsplash.jpg",
            prev: 2,
            id: 3,
            next: 1
        }
    ]

    return (
        <div className="carousel w-full">
            {
                bannerData.map((banner,index)=><BannerItem key={index} banner={banner}></BannerItem>)
            }
        </div>
    );
};

export default Banner;