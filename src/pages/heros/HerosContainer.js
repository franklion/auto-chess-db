import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Heros from '@assets/db/heros';
import Races from '@assets/db/races';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import LightBox from './components/LightBox';

const { Content } = Layout;

class HerosContainer extends Component {
    constructor(props) {
        super(props);
    
        this.initialSearch = {
            name: '',
            race: 'all'
        }
    
        this.state = {
            hero:         {},
            filteredHeros : Heros,
            isShowLightBox: false,
            search        : this.initialSearch,
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
        this.setState({ search: { ...this.state.search, name: name.trim() } }, () => this.handleGroupSearch() )
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
        this.setState({ search: { ...this.state.search, race }}, () => this.handleGroupSearch() )
    }
    
    handleResetSearch = () => { 
    this.setState({ filteredHeros: Heros, search: this.initialSearch }) 
    }

    render() {
        const { isShowLightBox, hero } = this.state;

        return (
            <Layout className="layout">
                <Header />

                <Content className="page-content">
                    <SearchForm races={Races}
                                handleHeroKeywordSearch={this.handleHeroKeywordSearch}
                                 
                                handleHeroRaceSearch={this.handleHeroRaceSearch}
                                handleResetSearch={this.handleResetSearch}  
                    />
                    <SearchResult heros={this.handleGroupByCoin()}
                                 handleShowHeroDetail={this.handleShowHeroDetail}
                    />
                </Content>

                {
                    isShowLightBox &&  <LightBox hero={hero} 
                                                 handleHideHeroDetail={this.handleHideHeroDetail}  
                                                />
                }
                <Footer />
            </Layout>
        );
    }
}

export default HerosContainer;