import React, { Component } from 'react';
import { Layout, Table, Divider } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PongData from '@assets/db/pong'

const { Content } = Layout;

console.log(PongData)

class RacesContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            pongColumns: [
               {
                    title: '種族',
                    dataIndex: 'race',
                    key: 'race',
                    className: 'race-header',
                    align: 'center',
                    width: '30%'
               },
               {
                    title: '羈絆效果',
                    dataIndex: 'pong',
                    key: 'pong',
                    className: 'pong-header',
                    align: 'center',
                    width: '70%',
                    render: pongs => (
                        <div className="pong-body-content">
                            {
                                pongs.map((item, index) => (
                                    <div key={index}>
                                        <span className="unit-word">單位：</span>
                                        <span>{item.unit}</span>
                                        <Divider type="vertical" />
                                        <span>{item.power}</span>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            ]
        }
    }
    
    render() {
        const { pongColumns } = this.state
        return (
            <Layout id="races-page">
                <Header />
                <Content className="page-content">
                    <div className="inner-content">
                        <Table rowKey={record => record.id}
                            columns={pongColumns} 
                            dataSource={PongData}
                            bordered={true}
                            className="pong-table"
                            pagination={{ alignment: 'center' }}
                        />     
                    </div>
                </Content>
                <Footer />
            </Layout>
        );
    }
}

export default RacesContainer;