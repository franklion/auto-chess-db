import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';

const Search = Input.Search;
const Option = Select.Option;
const FormItem = Form.Item;

class SearchForm extends Component {

    handleResetSearch = () => {
        this.props.form.resetFields()
        this.props.handleResetSearch()
    }

    render() {
        const { races } = this.props
        const { getFieldDecorator } = this.props.form;

        return (

            <div className="inner-content">
                <h1>英雄</h1>
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

        );
    }
}

const WrappedSearchForm = Form.create()(SearchForm)

export default WrappedSearchForm;