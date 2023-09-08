import React from 'react'
import styled from "styled-components";
import Foto from "../assests/shutterstock.png"

const RecentEpisode = () => {
  return (
    <div>
        <CardWrapper>
            <div className='container'>
                    <div class="row g-3">
                    <div class="col-md-6 col-12">
                        <div class="card m-2">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={Foto} class="img-fluid rounded-start w-100" alt="Foto" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">How To Thrive In An Economic Slowdown</h5>
                                        <p class="card-text">With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of both industrial jobs and the manufacturing sector respectively.</p>
                                        <div className='d-flex align-items-center justify-content-evenly'>
                                            <i class="fa-solid fa-rotate-right mx-1"></i>
                                            <i class="fa-solid fa-circle-play mx-1"></i>
                                            <i class="fa-solid fa-rotate-left mx-1"></i>
                                            <small class="text-muted mx-1">00:00</small>
                                            <input type="range" class="form-range mx-1" id="customRange1" />
                                            <small class="text-muted mx-1">01:20</small>
                                            <i class="fa-solid fa-volume-high mx-1"></i>
                                            <i class="fa-solid fa-download mx-1"></i>
                                            <i class="fa-solid fa-share-nodes mx-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="card m-2" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={Foto} class="img-fluid rounded-start w-100 h-100" alt="Foto" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">How To Thrive In An Economic Slowdown</h5>
                                        <p class="card-text">With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of both industrial jobs and the manufacturing sector respectively.</p>
                                        <div className='d-flex align-items-center justify-content-evenly'>
                                            <i class="fa-solid fa-rotate-right mx-1"></i>
                                            <i class="fa-solid fa-circle-play mx-1"></i>
                                            <i class="fa-solid fa-rotate-left mx-1"></i>
                                            <small class="text-muted mx-1">00:00</small>
                                            <input type="range" class="form-range mx-1" id="customRange1" />
                                            <small class="text-muted mx-1">01:20</small>
                                            <i class="fa-solid fa-volume-high mx-1"></i>
                                            <i class="fa-solid fa-download mx-1"></i>
                                            <i class="fa-solid fa-share-nodes mx-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="card m-2" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={Foto} class="img-fluid rounded-start w-100 h-100" alt="Foto" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">How To Thrive In An Economic Slowdown</h5>
                                        <p class="card-text">With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of both industrial jobs and the manufacturing sector respectively.</p>
                                        <div className='d-flex align-items-center justify-content-evenly'>
                                            <i class="fa-solid fa-rotate-right mx-1"></i>
                                            <i class="fa-solid fa-circle-play mx-1"></i>
                                            <i class="fa-solid fa-rotate-left mx-1"></i>
                                            <small class="text-muted mx-1">00:00</small>
                                            <input type="range" class="form-range mx-1" id="customRange1" />
                                            <small class="text-muted mx-1">01:20</small>
                                            <i class="fa-solid fa-volume-high mx-1"></i>
                                            <i class="fa-solid fa-download mx-1"></i>
                                            <i class="fa-solid fa-share-nodes mx-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="card m-2" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={Foto} class="img-fluid rounded-start w-100 h-100" alt="Foto" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">How To Thrive In An Economic Slowdown</h5>
                                        <p class="card-text">With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of both industrial jobs and the manufacturing sector respectively.</p>
                                        <div className='d-flex align-items-center justify-content-evenly'>
                                            <i class="fa-solid fa-rotate-right mx-1"></i>
                                            <i class="fa-solid fa-circle-play mx-1"></i>
                                            <i class="fa-solid fa-rotate-left mx-1"></i>
                                            <small class="text-muted mx-1">00:00</small>
                                            <input type="range" class="form-range mx-1" id="customRange1" />
                                            <small class="text-muted mx-1">01:20</small>
                                            <i class="fa-solid fa-volume-high mx-1"></i>
                                            <i class="fa-solid fa-download mx-1"></i>
                                            <i class="fa-solid fa-share-nodes mx-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
            
        </CardWrapper>
    </div>
  )
}

export default RecentEpisode


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