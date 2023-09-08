import React from 'react'
import styled from "styled-components";
import Foto from "../assests/fbn-personal2.png"

const HomeBanner = () => {
  return (
    <div>
        <HomeWrapper>
            <div className="style-banner" style={{background: `linear-gradient( rgba(0, 0, 0, 0.22) 100%, rgba(0, 0, 0)100%), url(${Foto})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="row m-0 p-0 w-100 h-100">
                    <div className="col-12 col-md-4 d-flex">
                        <div className="m-auto banner-box">
                            <h2>
                            FBN PODCAST
                            </h2>
                            <h4 className="py-3">
                            Enjoy amazing discussions about life and solutions that will transform your everyday on the go.
                            </h4>
                        </div>
                    </div>
                    <div className="col-6 d-none col-md-block">
                        <div className="banner w-100 h-100"></div>
                    </div>
                </div>
            </div>
        </HomeWrapper>
    </div>
  )
}

export default HomeBanner

const HomeWrapper = styled.div`
   .style-banner {
        height: 80vh;
        width: 100%;
    }
    .banner-box {
        background: RGBA(0,0,0,0.41 );
        color: #FFFFFF;
        padding: 30px;
    }
    h2 {
        font-family: "Inter";
        font-weight: normal;
        font-style: normal;
        text-align: left;
        color: #ffffff;
    }
    h4 {
        font-family: "Inter";
        font-weight: 500;
        font-style: normal;
        text-align: left;
        color: #ffffff;
    }
`