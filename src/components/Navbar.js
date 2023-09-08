import React from 'react'
import styled from "styled-components";
import FirstBankfoto from "../assests/First_bank_logo.png"

export const Navbar = () => {
  return (
    <div>
        <Wrapper className=' d-flex align-items-center justify-content-between'>
            <ul className="list-unstyled p-0 m-0 d-flex align-items-center justify-content-between">
                <li className="">Home</li>
                <li className="active">Personal</li>
                <li className="">Business</li>
                <li className="">Private</li>
            </ul>
            <ul className="list-unstyled p-0 m-0 d-flex align-items-center justify-content-between">
                <li className="active">Select Language</li>
                <li className="">Sustainability</li>
                <li className="">Nigeria</li>
            </ul>
        </Wrapper>
        <NavWrapper>
            <div className='container'>
                <div className=' d-flex align-items-center justify-content-between'>
                    <div class="logo-image">
                        <img src={FirstBankfoto} class="img-fluid rounded-start" alt="Foto" />
                    </div>
                    <div>
                        <ul className="list-unstyled p-0 m-0 d-flex align-items-center justify-content-between">
                            <li className="">CATEGORIES</li>
                            <li className="">BLOG</li>
                            <li className="">SUBSCRIBE</li>
                            <li><i class="fa-solid fa-magnifying-glass"></i></li>
                            <li><button>CONTACT</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </NavWrapper>
    </div>
  )
}

const Wrapper = styled.div`
background: #003b65;
li {
    padding: 15px 20px;
    color: #ffffff;
}
.active {
    background: #ffffff;
    color: #003b65;
}
`
const NavWrapper = styled.div`
.logo-image {
    width: 150px;
}
li {
    margin-right: 30px;
font-size: 15px;
font-weight: normal;
font-style: normal;
text-align: left;
color: #003b65;
}
button {
    width: 100px;
    padding: 10px 20px;
    font-size: 13px; 
    background: #f0bd2d;
    font-family: "Inter";
    font-weight: normal;
    font-style: normal;
    color: #003b65;

}
`