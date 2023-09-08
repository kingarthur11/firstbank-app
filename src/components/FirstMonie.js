import React from 'react'
import styled from "styled-components";
import Bankfoto from "../assests/Firstmonie-100KA-Hap.png"
import Networkfoto from "../assests/firstbank-corporate-.png"

const FirstMonie = () => {
  return (
    <div>
        <FirstMonieWrapper>
            <div class="container px-4">
                <div class="row g-3">
                    <div class="col-md-6">
                        <div className='position-relative'>
                            <div class="card" style={{ height: '20rem'}}>
                                <div className='card-image d-none d-lg-block'><img src={Bankfoto} class="img-fluid rounded-start" alt="Bankfoto" /></div>
                                <div class="card-body position-relative">
                                    <h5 class="card-title">Firstmonie</h5>
                                    <p class="card-text">Stay one step ahead of your finances with Firstmonie, our mobile and e-banking service designed with #YouFirst in mind.</p>
                                    <button className='position-absolute start-50 translate-middle'>LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div className='position-relative'>
                            <div class="card" style={{ height: '20rem'}}>
                                <div className='card-image d-none d-lg-block'><img src={Networkfoto} class="img-fluid rounded-start" alt="Networkfoto" /></div>
                                <div class="card-body position-relative">
                                    <h5 class="card-title">Youfirst</h5>
                                    <p class="card-text">Giant strides, big leaps and innovation has formed the basis of our heritage over the years. Indeed, we are woven into the fabric of society. We are rooted in tradition but constantly leaning towards the future. We are excited about the days ahead. #EnablingYou #YouFirst</p>
                                    <button className='position-absolute start-50 translate-middle'>LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FirstMonieWrapper>
    </div>
  )
}

export default FirstMonie


const FirstMonieWrapper = styled.div`
padding-top: 200px;
.card {
    background: #ffffff;
}
.card-body {
    padding-top: 55px;
}
.card-image {
    position: absolute;
    top: -50%;
    left: 13%;
    width: 340px;
    height: 655px;
}
.card-title {
    text-align: center;
}
.card-text {
    font-family: "Inter";
font-size: 13px;
font-weight: 500;
font-style: normal;
text-align: left;
color: #5f707d;
}
button {
    width: 100px;
    padding: 10px 20px;
    font-size: 8px; 
    background: #f0bd2d;
    font-family: "Inter";
    font-weight: normal;
    font-style: normal;
    color: #003b65;
    bottom: 5%;

}

`