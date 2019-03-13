import React from 'react';
import { Row, Divider } from 'antd';
import Hero from './Hero';

const SearchResult = ({ heros, handleShowHeroDetail }) => (

    <div className="inner-content">
        {
            Object.keys(heros).map(coin => (
                <div className="hero-content" key={coin}>
                    <Row className="coin-row">
                        {
                            [...Array(+coin)].map((item, index) => (
                                <span className="coin" key={index}>＄</span>
                            ))
                        }
                    </Row>
                    <Row>
                        {
                            heros[coin].map(hero => (
                                <Hero key={hero.id}
                                        hero={hero}
                                        handleShowHeroDetail={handleShowHeroDetail}   
                                />
                            ))
                        }      
                    </Row>       
                    <Divider />
                </div>
            ))
        }   
    </div>

)

export default SearchResult;