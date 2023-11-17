import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

function Work() {
    return (
        <div className='work'>
            <div className="awesome">
                <span>Work for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ispum is simply dummy text of printing of Lorem ipsum <br />
                    dolor sit amet consectetur adipisicing elit. <br />
                    Lorem ispum is simply dummy text of printing of Lorem ipsum <br />
                </span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur1" style={{ background: "var(--purple)" }}></div>
            </div>

            {/* Right Side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="UpworkImg" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="FiverrImg" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="AmazonImg" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="ShopifyImg" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="FacebookImg" />
                    </div>

                    {/* Background Circles */}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                </div>
            </div>
        </div>
    )
}

export default Work
