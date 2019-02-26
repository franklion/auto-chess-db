import React, { Component } from 'react';
import { Layout, Input, Row, Divider } from 'antd';
// import Coin from '../assets/images/coin.svg'

const { Content: AntdContent } = Layout;
const Search = Input.Search;

class Content extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            filteredHeros: []
        }

        
    }

    // handleHeroKeywordSearch = keyword => {
    //     if(!keyword) return

    //     // const filteredHeros = this.props.heros.filter(hero => {
    //     //     return hero.name.indexOf(keyword) > -1
    //     // })

    //     // console.log(filteredHeros)
    // }

    

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
                                        [...Array(+coin)].map((item, index) => <span className="coin" key={index}>＄</span>)
                                        
                                    }
                                </Row>
                                <Row>
                                    {
                                        heros[coin].map(hero => <span key={hero.id} className="hero-name">{hero.name}</span>)
                                    }      
                                </Row>
                                    {
                                        <Divider />
                                    }
                            </div>
                        ))
                    }
                </div>
            </AntdContent>
        );
    }
}

export default Content;