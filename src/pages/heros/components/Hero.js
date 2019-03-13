import React, { Component } from 'react';
import { Tooltip } from 'antd';

class Hero extends Component {
    
    handleShowHeroDetail = () => {
        this.props.handleShowHeroDetail(this.props.hero)
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