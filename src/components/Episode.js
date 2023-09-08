import React from 'react'
import Foto from "../assests/shutterstock.png"
import styled from "styled-components";
import Bankfoto from "../assests/Firstmonie-100KA-Hap.png"
import Featurefoto from "../assests/World-Singles.png"
import BankLogo from "../assests/First-Bank-Logo_Symb.png"

const Episode = () => {
    function TopWind() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
  return (
    <Wrapper>
        <PodcastWrapper>
            <div className=''>
                <div className='container'>
                    <p>PODCAST</p>
                    <h3>Recent Episodes</h3>
                </div>
                <div class="container">
                    <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
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
        <CardWrapper>
            <div className='container wrap-card'>
                <div class="card m-2" style={{maxWidth: '540px'}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Foto} class="img-fluid rounded-start w-100 h-100" alt="Foto" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">How To Thrive In An Economic Slowdown</h5>
                                <p class="card-text">With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of both industrial jobs and the manufacturing sector respectively.</p>
                                <div className='d-flex align-items-center justify-content-evenly'>
                                    <i class="fa-solid fa-rotate-right"></i>
                                    <i class="fa-solid fa-circle-play"></i>
                                    <i class="fa-solid fa-rotate-left"></i>
                                    <small class="text-muted">00:00</small>
                                    <input type="range" class="form-range" id="customRange1" />
                                    <small class="text-muted">01:20</small>
                                    <i class="fa-solid fa-volume-high"></i>
                                    <i class="fa-solid fa-download"></i>
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card m-2" style={{maxWidth: '540px'}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Foto} class="img-fluid rounded-start w-100 h-100" alt="Foto" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">How To Thrive In An Economic Slowdown</h5>
                                <p class="card-text">With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of both industrial jobs and the manufacturing sector respectively.</p>
                                <div className='d-flex align-items-center justify-content-evenly'>
                                    <i class="fa-solid fa-rotate-right"></i>
                                    <i class="fa-solid fa-circle-play"></i>
                                    <i class="fa-solid fa-rotate-left"></i>
                                    <small class="text-muted">00:00</small>
                                    <input type="range" class="form-range" id="customRange1" />
                                    <small class="text-muted">01:20</small>
                                    <i class="fa-solid fa-volume-high"></i>
                                    <i class="fa-solid fa-download"></i>
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card m-2" style={{maxWidth: '540px'}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Foto} class="img-fluid rounded-start w-100 h-100" alt="Foto" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">How To Thrive In An Economic Slowdown</h5>
                                <p class="card-text">With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of both industrial jobs and the manufacturing sector respectively.</p>
                                <div className='d-flex align-items-center justify-content-evenly'>
                                    <i class="fa-solid fa-rotate-right"></i>
                                    <i class="fa-solid fa-circle-play"></i>
                                    <i class="fa-solid fa-rotate-left"></i>
                                    <small class="text-muted">00:00</small>
                                    <input type="range" class="form-range" id="customRange1" />
                                    <small class="text-muted">01:20</small>
                                    <i class="fa-solid fa-volume-high"></i>
                                    <i class="fa-solid fa-download"></i>
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card m-2" style={{maxWidth: '540px'}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Foto} class="img-fluid rounded-start w-100 h-100" alt="Foto" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">How To Thrive In An Economic Slowdown</h5>
                                <p class="card-text">With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of both industrial jobs and the manufacturing sector respectively.</p>
                                <div className='d-flex align-items-center justify-content-evenly'>
                                    <i class="fa-solid fa-rotate-right"></i>
                                    <i class="fa-solid fa-circle-play"></i>
                                    <i class="fa-solid fa-rotate-left"></i>
                                    <small class="text-muted">00:00</small>
                                    <input type="range" class="form-range" id="customRange1" />
                                    <small class="text-muted">01:20</small>
                                    <i class="fa-solid fa-volume-high"></i>
                                    <i class="fa-solid fa-download"></i>
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </CardWrapper>
        <FirstMonieWrapper>
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                        <div className='position-relative'>
                            <div class="card" style={{width: '30rem', height: '20rem'}}>
                                <div className='card-image'><img src={Bankfoto} class="img-fluid rounded-start" alt="Bankfoto" /></div>
                                <div class="card-body position-relative">
                                    <h5 class="card-title">Firstmonie</h5>
                                    <p class="card-text">Stay one step ahead of your finances with Firstmonie, our mobile and e-banking service designed with #YouFirst in mind.</p>
                                    <button className='position-absolute start-50 translate-middle'>LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className='position-relative'>
                            <div class="card" style={{width: '30rem', height: '20rem'}}>
                                <div className='card-image'><img src={Bankfoto} class="img-fluid rounded-start" alt="Bankfoto" /></div>
                                <div class="card-body position-relative">
                                    <h5 class="card-title">Firstmonie</h5>
                                    <p class="card-text">Stay one step ahead of your finances with Firstmonie, our mobile and e-banking service designed with #YouFirst in mind.</p>
                                    <button className='position-absolute start-50 translate-middle'>LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container d-flex align-items-center justify-content-between'>
                <div className='position-relative'>
                    <div class="card" style={{width: '30rem', height: '20rem'}}>
                        <div className='card-image'><img src={Bankfoto} class="img-fluid rounded-start" alt="Bankfoto" /></div>
                        <div class="card-body position-relative">
                            <h5 class="card-title">Firstmonie</h5>
                            <p class="card-text">Stay one step ahead of your finances with Firstmonie, our mobile and e-banking service designed with #YouFirst in mind.</p>
                            <button className='position-absolute start-50 translate-middle'>LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div className='position-relative'>
                    <div class="card" style={{width: '30rem', height: '20rem'}}>
                        <div className='card-image'><img src={Bankfoto} class="img-fluid rounded-start" alt="Bankfoto" /></div>
                        <div class="card-body position-relative">
                            <h5 class="card-title">Firstmonie</h5>
                            <p class="card-text">Giant strides, big leaps and innovation has formed the basis of our heritage over the years. Indeed, we are woven into the fabric of society. We are rooted in tradition but constantly leaning towards the future. We are excited about the days ahead. #EnablingYou #YouFirst</p>
                            <button className='position-absolute start-50 translate-middle'>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </FirstMonieWrapper>
        <FeatureWrapper>
            <div className='container'>
                <p>PODCAST</p>
                <h3>Recent Episodes</h3>
            </div>
        <div class="container pt-5">
            <div class="row g-3">
                <div class="col-4">
                    <div className=''>
                        <div class="card">
                            <img src={Featurefoto} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Worlds Singles' Day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div className=''>
                        <div class="card">
                            <img src={Featurefoto} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Worlds Singles' Day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div className=''>
                        <div class="card">
                            <img src={Featurefoto} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Worlds Singles' Day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div className=''>
                    <div class="card">
                        <img src={Featurefoto} class="card-img-top" alt="..." />
                        <div class="card-body">
                        <p class="card-text">Worlds Singles' Day</p>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col-4">
                    <div className=''>
                    <div class="card">
                        <img src={Featurefoto} class="card-img-top" alt="..." />
                        <div class="card-body">
                        <p class="card-text">Worlds Singles' Day</p>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col-4">
                    <div className=''>
                    <div class="card">
                        <img src={Featurefoto} class="card-img-top" alt="..." />
                        <div class="card-body">
                        <p class="card-text">Worlds Singles' Day</p>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
        </FeatureWrapper>
        <FooterWrapper>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between py-4'>
                    <img src={BankLogo} class="card-img-top" alt="..." />
                     <div>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <hr className='my-3'/>
                <div className=''>
                    <div class="container px-4">
                        <div class="row gx-5">
                            <div class="col">
                                <ul className='list-unstyled'>
                                    <li>CATEGORIES</li>
                                    <li>Loan</li>
                                    <li>Insurance</li>
                                    <li>Ways To Bank</li>
                                    <li>Family</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul className='list-unstyled'>
                                    <li>BANKING</li>
                                    <li>Corporate Information</li>
                                    <li>Personal Banking</li>
                                    <li>Business Banking</li>
                                    <li>Private Banking</li>
                                    <li>Loan Calculator</li>
                                    <li>Vendor Portal</li>
                                    <li>Download Forms</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul className='list-unstyled'>
                                    <li>SECURITY</li>
                                    <li>BVN</li>
                                    <li>Anti-Fraud</li>
                                    <li>Security Tips</li>
                                    <li>Secure Code</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul className='list-unstyled'>
                                    <li>CONTACT US</li>
                                    <li>Feedback and Complaints</li>
                                    <li>Whistleblowing</li>
                                    <li>Find a Branch</li>
                                    <li>Contact Form</li>
                                    <li>Find an Agent</li>
                                    <li>Agent Network</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul className='list-unstyled'>
                                    <li>LEGAL</li>
                                    <li>Terms of use</li>
                                    <li>Privacy Policy</li>
                                    <li>Cookies Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='d-flex align-items-center justify-content-between'>
                    <p>© 2022. First Bank of Nigeria Ltd. An FBNHoldings Company.</p>
                    <p onClick={() => TopWind()}>Back To Top <span><i class="fa-solid fa-arrow-up"></i></span></p>
                </div>
            </div>
            
        </FooterWrapper>
    </Wrapper>
  )
}

export default Episode

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

const Wrapper = styled.div`
background: #ECEFF1;


`

const CardWrapper = styled.div`
.card-title {
font-family: "Inter";
/* font-size: 45px; */
font-weight: normal;
font-style: normal;
text-align: left;
color: #003b65;
}
.wrap-card {
display: flex;
flex-wrap: wrap;
}
`
const FeatureWrapper = styled.div`
.wrap-card {
display: flex;
flex-direction: row;
/* flex-wrap: wrap; */
}
`
const FooterWrapper = styled.div`
background-color: #003B65;
color: #ffffff;
i {
    margin-right: 10px;
    background-color: #002F51;
    padding: 10px;
    border-radius: 50%;
}
img {
    width: 50px;
}
li {
    color: #ffffff;
    margin-bottom: 10px;
    font-size: 13px;
}
li:first-child {
    margin-bottom: 30px;
    font-weight: 600;
}
hr {
    height: 2px;
    background-color: #F0BD2D;
}
p {
    color: #ffffff;
    font-size: 13px;
    
    span {
        padding-left: 10px;
        cursor: pointer;
    }
}
`