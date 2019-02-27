import React, { Component } from 'react';
import { Row, Col } from 'antd';

class LightBox extends Component {
    render() {
        const { isShowLightBox, hero } = this.props;

        return (
            isShowLightBox && (
                <div className="light-box">
                    <div className="box">
                        <div className="btn-close" onClick={this.props.handleHideHeroDetail}></div>
                        <img src={require(`../assets/images/${hero.image}`)} alt=""/>
                        <div className="box-content">
                            <Row className="box-content-row">
                                <Col span={5}>
                                    <p>名稱：</p>
                                </Col>
                                <Col span={19}>
                                    <p className="desc">{hero.name}</p>
                                </Col>
                            </Row>
                            <Row className="box-content-row">
                                <Col span={5}>
                                    <p>花費：</p>
                                </Col>
                                <Col span={19}>
                                    <p className="desc">{hero.coin}</p>
                                </Col>
                            </Row>
                            <Row className="box-content-row">
                                <Col span={5}>
                                    <p>種族：</p>
                                </Col>
                                <Col span={19}>
                                    <p className="desc">{hero.race.join('、')}</p>
                                </Col>
                            </Row>
                            <Row className="box-content-row">
                                <Col span={5}>
                                    <p>技能：</p>
                                </Col>
                                <Col span={19}>
                                    <p className="desc">{hero.skill}</p>
                                </Col>
                            </Row>
                            
                        </div>
                    </div>
                </div>
            )  
        )
    }
}

export default LightBox;