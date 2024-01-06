import Banner from '../banner/Banner';
import Category from '../category/Category';
import Featured from '../featured/Featured';
import PopularMenu from '../popular-menu/PopularMenu';
import Testimonials from '../testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
