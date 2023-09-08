import React from 'react'
import Foto from "../assests/shutterstock.png"
import styled from "styled-components";




import Podcast from './Podcast';
import FirstMonie from './FirstMonie';
import RecentEpisode from './RecentEpisode';
import Footer from './Footer';
import FeatureEpi from './FeatureEpi';

const Episode = () => {
    
  return (
    <Wrapper>
        <Podcast />
        <RecentEpisode />
        <FirstMonie />
        <FeatureEpi />
        <Footer />
    </Wrapper>
  )
}

export default Episode



const Wrapper = styled.div`
background: #ECEFF1;
`
