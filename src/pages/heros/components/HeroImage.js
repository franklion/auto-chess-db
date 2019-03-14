import React from 'react';
import Loading from '@components/Loading'


const HeroImage = ({ isLoading, imageUrl }) => (
    isLoading ? <Loading /> : <img className="hero-image" src={require(`@assets/images/${imageUrl}`)} alt=""/>
)

export default HeroImage;
