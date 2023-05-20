import React from 'react';
import Title from '../shared/Title';
import Card from './Card';
import { featuresData } from './../../constants/CardsData';

const Features = () => {
    return (
        <section
            id='features'
            className='w-full h-[800px] py-20 border-b-[1px]'
        >
            <Title title='Features' description='What I do' />
            <div
                className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6
            xl:gap-20'
            >
                {featuresData.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default Features;
