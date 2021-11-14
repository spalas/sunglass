import React from 'react';
import BestSeller from '../BestSeller/BestSeller';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Explore from './Explore/Explore';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <Review></Review>

            <BestSeller></BestSeller>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;