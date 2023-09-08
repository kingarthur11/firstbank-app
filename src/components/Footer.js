import React from 'react'
import styled from "styled-components";
import BankLogo from "../assests/First-Bank-Logo_Symb.png"

const Footer = () => {
    function TopWind() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
  return (
    <div>
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
    </div>
  )
}

export default Footer


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