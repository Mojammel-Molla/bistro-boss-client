import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../shared/menu-item/MenuItem';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../../our-menu/menu-category/MenuCategory';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');

  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <MenuCategory items={popular}></MenuCategory>
    </section>
  );
};

export default PopularMenu;
