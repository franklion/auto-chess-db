import React, { Component } from 'react';
import { Layout, Input, Row, Divider } from 'antd';
import Hero from './Hero';

const { Content: AntdContent } = Layout;
const Search = Input.Search;

class Content extends Component {

    render() {
        const { heros } = this.props

        return (
            <AntdContent className="page-content">
                <div className="inner-content">
                    <h1>Heros</h1>
                    <Search
                            className="searchCmp"
                            placeholder="英雄名稱"
                            onSearch={this.props.handleHeroKeywordSearch}
                            enterButton
                            />
                </div>
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
                                                  handleShowHeroDetail={this.props.handleShowHeroDetail}   
                                            />
                                        ))
                                    }      
                                </Row>       
                                <Divider />   
                            </div>
                        ))
                    }
                </div>
                
            </AntdContent>
        );
    }
}

export default Content;