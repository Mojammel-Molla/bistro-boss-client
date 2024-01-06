import React from 'react';
import MenuItem from './../../shared/menu-item/MenuItem';
import Cover from '../../shared/cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div className="my-12">
      {title && (
        <Cover title={title} img={img} description={description}></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-8 mt-12 ">
        {items.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn  btn-outline border-0 border-b-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
