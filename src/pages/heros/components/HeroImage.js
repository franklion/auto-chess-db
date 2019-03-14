import React, { Component } from 'react';
import Loading from '@components/Loading'


class HeroImage extends Component {
    render() {
        const { isLoading, imageUrl } = this.props

        console.log(isLoading)

        return (
            isLoading ? <Loading /> : <img className="hero-image" src={require(`@assets/images/${imageUrl}`)} alt=""/>
        );
    }
}

export default HeroImage;
