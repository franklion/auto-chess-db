import React, { Component } from 'react';
import { Skeleton, Row, Col } from 'antd';
import HeroImage from './HeroImage'

class LightBox extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: true
        }
    }

    preloadImage = url => {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.addEventListener('load', () => {
                resolve()
            })
            img.addEventListener('error', () => {
                reject()
            })
            img.src = url;
        });
    }

    componentDidMount() {
        const { hero } = this.props
        // this.preloadImage(require(`@assets/images/${hero.image}`))
        // this.preloadImage('https://s.newtalk.tw/album/news/109/5a3e0a025bb86.jpg')
        this.preloadImage(require(`@assets/images/${hero.image}`))
            .then(res => {
                this.setState({ isLoading: false })
            })
            .catch(err => {
                console.log(err)
            })
    }
    

    render() {
        const { isLoading } = this.state
        const { handleHideHeroDetail, hero } = this.props

        return (
            <div className="light-box">
                <div className="box">
                    <div className="btn-close" onClick={handleHideHeroDetail}></div>
                        <div className="box-image">
                            <HeroImage isLoading={isLoading}
                                        imageUrl={hero.image} 
                            />
                        </div>
                    <div className="box-content">
                        <Skeleton active title={false} paragraph={{ rows: 5, width: ['25%','15%','35%', '100%', '100%'] }} loading={isLoading}>
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
                        </Skeleton>
                    </div>
                </div>
            </div>
        )
    }
}

export default LightBox;