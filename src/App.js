import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Heros from './assets/db/heros';
import Races from './assets/db/races';
import LightBox from './components/LightBox';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filteredHeros: Heros,
      isShowLightBox: false,
      search: {
        name: '',
        race: 'all'
      }
    }    
  }

  handleGroupByCoin = () => {
    const groupByCoin = this.state.filteredHeros.reduce((groups, hero) => {
        const coinValue = hero['coin']
        groups[coinValue] = groups[coinValue] || []
        groups[coinValue].push(hero)
        return groups
    }, {})
    return groupByCoin
  }

  handleHeroKeywordSearch = name => {
    const { search } = this.state
    search.name = name
    this.setState({ search }, () => this.handleGroupSearch() )
  }

  handleGroupSearch = () => {
    let filteredHeros = Heros
    const { name, race } = this.state.search

    if ( name !== '') {
      filteredHeros = filteredHeros.filter(hero => hero.name.indexOf(name) > -1 )
    }

    if ( race !== 'all') {
      filteredHeros = filteredHeros.filter(hero => hero.race.indexOf(race) > -1 )
    }

    this.setState({ filteredHeros })
  }

  handleShowHeroDetail = hero => {
    this.setState({ 
      isShowLightBox: true,
      hero 
    })
  }

  handleHideHeroDetail = () => { this.setState({ isShowLightBox: false }) }
  
  handleHeroRaceSearch = race => {
    const { search } = this.state
    search.race = race
    this.setState({ search }, () => this.handleGroupSearch() )
  }

  render() {
    const { isShowLightBox, hero } = this.state;

    return (
      <Layout className="layout">

        <Header />

        <Content heros={this.handleGroupByCoin()}
                 races={Races}
                 handleHeroKeywordSearch={this.handleHeroKeywordSearch}
                 handleShowHeroDetail={this.handleShowHeroDetail} 
                 handleHeroRaceSearch={this.handleHeroRaceSearch}
                 handleFocus={this.handleFocus}
                 handleBlur={this.handleBlur}
                 />

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
