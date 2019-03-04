import React, { Component } from 'react';
import { Layout, Input, Row, Divider, Select } from 'antd';
import Hero from './Hero';

const { Content: AntdContent } = Layout;
const Search = Input.Search;
const Option = Select.Option;

class Content extends Component {

    render() {
        const { heros, races } = this.props

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
                    
                        <Select
                            showSearch
                            className="searchCmp"
                            placeholder="選擇職業"
                            defaultValue={'all'}
                            optionFilterProp="children"
                            onChange={this.props.handleHeroRaceSearch}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                                    <Option key="all" value="all">所有種族</Option>
                            {
                                races.map(race => (
                                    <Option key={race} value={race}>{race}</Option>
                                ))

                            }
                        </Select>     
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