import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import FeaturedImg from '../../../assets/home/featured.jpg';
const Featured = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${FeaturedImg})`,
      }}
      className="my-12 text-white bg-fixed "
    >
      <SectionTitle
        heading="Featured Item"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="flex justify-center items-center px-36 py-20">
        <div>
          <img
            className="w-[648px] h-[400px] items-center"
            src={FeaturedImg}
            alt=""
          />
        </div>
        <div className="items-center text-white">
          <p>Aug 20, 2023</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            voluptatum, adipisci velit ab illo error, veritatis officia expedita
            illum cum, cumque ea dolores. Quo similique obcaecati consequatur
            voluptate blanditiis voluptatem.
          </p>
          <button className="btn  btn-outline border-0 border-b-4">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
