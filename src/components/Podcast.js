import React from 'react'
import styled from "styled-components";
const Podcast = () => {
  return (
    <div>
        <PodcastWrapper>
            <div className=''>
                <div className='container'>
                    <p>PODCAST</p>
                    <h3>Recent Episodes</h3>
                </div>
                <div class="container">
                    <div class="row g-3">
                        <div class="col">
                        <div class="episode-list">ALL</div>
                        </div>
                        <div class="col">
                        <div class="episode-list">LOAN</div>
                        </div>
                        <div class="col">
                        <div class="episode-list">INSURANCE</div>
                        </div>
                        <div class="col">
                        <div class="episode-list">WAYS TO BANK</div>
                        </div>
                        <div class="col">
                        <div class="episode-list">FAMILY</div>
                        </div>
                    </div>
                </div>
            </div>
        </PodcastWrapper>
    </div>
  )
}

export default Podcast


const PodcastWrapper = styled.div`
li {
    margin: 20px;
}
.episode-list {
    width: 100px;
    padding: 10px;
    font-size: 10px; 
    background: #f0bd2d;
    font-family: "Inter";
    font-weight: normal;
    font-style: normal;
    text-align: center;
    color: #003b65;
    .active {
    background: #003b65;
    color: #ffffff;
    }
}
p {
    font-family: "Inter";
font-size: 13px;
font-weight: normal;
font-style: normal;
text-align: left;
color: #003b65;
}
h3 {
    font-weight: 500;
font-size: 15px;
font-weight: normal;
font-style: normal;
text-align: left;
color: #003b65;
}
`