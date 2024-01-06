import { useState } from 'react';
import OrderCover from '../../../assets/shop/banner2.jpg';
import Cover from '../../shared/cover/Cover';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../order-tab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(menu, category);
  const desserts = menu.filter(item => item.category === 'dessert');
  const soups = menu.filter(item => item.category === 'soup');
  const salads = menu.filter(item => item.category === 'salad');
  const pizzas = menu.filter(item => item.category === 'pizza');
  const drinks = menu.filter(item => item.category === 'drinks');
  console.log(desserts, soups, salads, pizzas, drinks);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Order</title>
      </Helmet>
      <Cover
        img={OrderCover}
        title="Our Restaurant"
        description="Would you like to try a dish?"
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
