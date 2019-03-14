import React, { Component } from 'react';
import { Tooltip } from 'antd';

class Hero extends Component {
   
    handleShowHeroDetail = () => {
        const { hero, handleShowHeroDetail } = this.props
        handleShowHeroDetail(hero)
    }

    render() {
        const { hero } = this.props

        return (
            <Tooltip key={hero.id} placement="topLeft" title={hero.race.join('、')} arrowPointAtCenter>
                <span className="hero-name" onClick={this.handleShowHeroDetail}>{hero.name}</span>
            </Tooltip>
        );
    }
}

export default Hero;