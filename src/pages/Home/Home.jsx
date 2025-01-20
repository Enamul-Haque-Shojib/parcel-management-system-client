import Banner from '@/components/Banner/Banner';
import Top3DeliverMen from '@/components/Dashboard/Top3DeliverMen/Top3DeliverMen';
import Features from '@/components/Features/Features';
import Stats from '@/components/Stats/Stats';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Stats></Stats>
            <Top3DeliverMen></Top3DeliverMen>
        </div>
    );
};

export default Home;