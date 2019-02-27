import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Heros from './assets/db/heros';
import LightBox from './components/LightBox';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filteredHeros: Heros,
      isShowLightBox: false,
      hero: {}
    }
  }

  handleGroupByHeros = () => {
    const groupByHeros = this.state.filteredHeros.reduce((groups, hero) => {
        const coinValue = hero['coin']
        groups[coinValue] = groups[coinValue] || []
        groups[coinValue].push(hero)
        return groups
    }, {})
    return groupByHeros
  }

  handleHeroKeywordSearch = keyword => {
    const filteredHeros = Heros.filter(hero => hero.name.indexOf(keyword) > -1 )
    this.setState({ filteredHeros })
  }

  handleShowHeroDetail = hero => {
    this.setState({ 
      isShowLightBox: true,
      hero 
    })
  }

  handleHideHeroDetail = () => {
    console.log('handleHideHeroDetail')
    this.setState({ isShowLightBox: false })
  }
  
  render() {
    const { isShowLightBox, hero } = this.state;

    return (
      <Layout className="layout">

        <Header />

        <Content heros={this.handleGroupByHeros()}
                 handleHeroKeywordSearch={this.handleHeroKeywordSearch}
                 handleShowHeroDetail={this.handleShowHeroDetail} />

        <LightBox isShowLightBox={isShowLightBox}
                  hero={hero} 
                  handleHideHeroDetail={this.handleHideHeroDetail}  
                  />

        <Footer />
      </Layout>
    );
  }
}

export default App;
