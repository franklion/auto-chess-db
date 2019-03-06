import React, { Component } from 'react';
import { Layout, Form, Input, Row, Divider, Select, Button } from 'antd';
import Hero from './Hero';

const { Content: AntdContent } = Layout;
const Search = Input.Search;
const Option = Select.Option;
const FormItem = Form.Item;




class Content extends Component {

    handleResetSearch = () => {
        this.props.form.resetFields()
        this.props.handleResetSearch()
    }

    render() {
        const { heros, races } = this.props
        const { getFieldDecorator } = this.props.form;

        return (
            <AntdContent className="page-content">
                <div className="inner-content">
                    <h1>Heros</h1>

                    <Form layout="inline">
                        <FormItem>
                            {getFieldDecorator('name', {
                                initialValue: '',
                                validateTrigger: false,
                            })(
                                <Search
                                        className="search-name-input"
                                        placeholder="英雄名稱"
                                        autoComplete="off"
                                        onSearch={this.props.handleHeroKeywordSearch}
                                        enterButton
                                    />
                            )}
                        </FormItem>

                        <FormItem className="">
                            {getFieldDecorator('race', {
                                initialValue: 'all',
                                validateTrigger: false,
                            })(
                                <Select
                                        showSearch
                                        className="search-race-input"
                                        placeholder="選擇職業"
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
                            )}
                        </FormItem>

                        <FormItem>
                            <Button type="primary" onClick={this.handleResetSearch}>重置搜尋</Button>
                        </FormItem>
                        
                    </Form>
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

const WrappedContent = Form.create()(Content)

export default WrappedContent;