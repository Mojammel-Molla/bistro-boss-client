import { Helmet } from 'react-helmet-async';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import MenuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import PopularMenu from '../home/popular-menu/PopularMenu';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './menu-category/MenuCategory';
import SectionTitle from '../../components/SectionTitle';
import Cover from '../shared/cover/Cover';

const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover
        title="Our Menu"
        img={MenuImg}
        description="Would you like to try a dish?"
      ></Cover>
      <SectionTitle
        heading="Don't miss"
        subHeading="Today's offer"
      ></SectionTitle>
      {/* Offered items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Desserts items */}
      <MenuCategory
        items={dessert}
        img={dessertImg}
        title="dessert"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
      {/* Pizza items */}
      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title="pizza"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
      {/* salad items */}
      <MenuCategory
        items={salad}
        img={saladImg}
        title="salad"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
      {/* Soup items */}
      <MenuCategory
        items={soup}
        img={soupImg}
        title="soup"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
    </div>
  );
};

export default OurMenu;
