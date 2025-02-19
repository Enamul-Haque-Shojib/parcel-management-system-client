import Banner from '@/components/Banner/Banner';
import Top3DeliverMen from '@/components/Dashboard/Top3DeliverMen/Top3DeliverMen';
import Features from '@/components/Features/Features';
import Feedback from '@/components/Feedback/Feedback';
import Stats from '@/components/Stats/Stats';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <Features></Features>
            
            <Top3DeliverMen></Top3DeliverMen>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;