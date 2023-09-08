import React from 'react'
import Featurefoto from "../assests/World-Singles.png"
import styled from "styled-components";

const FeatureEpi = () => {
  return (
    <div>
        <FeatureWrapper>
            <div className='container'>
                <p>PODCAST</p>
                <h3>Recent Episodes</h3>
            </div>
            <div class="container py-5">
            <div class="row g-3">
                <div class="col-md-4 col-sm-6 col-12">
                    <div className=''>
                        <div class="card">
                            <img src={Featurefoto} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Worlds Singles' Day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12">
                    <div className=''>
                        <div class="card">
                            <img src={Featurefoto} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Worlds Singles' Day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12">
                    <div className=''>
                        <div class="card">
                            <img src={Featurefoto} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Worlds Singles' Day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12">
                    <div className=''>
                    <div class="card">
                        <img src={Featurefoto} class="card-img-top" alt="..." />
                        <div class="card-body">
                        <p class="card-text">Worlds Singles' Day</p>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12">
                    <div className=''>
                    <div class="card">
                        <img src={Featurefoto} class="card-img-top" alt="..." />
                        <div class="card-body">
                        <p class="card-text">Worlds Singles' Day</p>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12">
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
    </div>
  )
}

export default FeatureEpi

const FeatureWrapper = styled.div`
.wrap-card {
display: flex;
flex-direction: row;
/* flex-wrap: wrap; */
}
`