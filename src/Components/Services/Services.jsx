import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Cards from '../Cards/Card'
import DummyResume from '../Services/DummyResume.pdf'

function Services() {
    return (
        <div>
            <div className="services">
                {/* left side */}
                <div className="awesome">
                    <span>My Awesome</span>
                    <span>Services</span>
                    <span>
                        Lorem ispum is simply dummy text of printing of Lorem ipsum <br />
                        dolor sit amet consectetur adipisicing elit.
                    </span>
                    <a href={DummyResume} download>
                        <button className="button s-button">Download CV</button>
                    </a>

                    <div className="blur s-blur1" style={{ background: "var(--purple)" }}></div>
                </div>


                {/* right side */}
                <div className="cards">
                    {/* First Card */}
                    <div style={{ left: '14rem' }}>
                        <Cards
                            emoji={HeartEmoji}
                            heading={'Design'}
                            detail={"Figma, Sketch, Photoshop, Adobe xd"}
                        />
                    </div>

                    {/* Second Card */}
                    <div style={{ left: '-4rem', top: '12rem' }}>
                        <Cards
                            emoji={Glasses}
                            heading={'Developer'}
                            detail={"Html, CSS, JavaScript, React"}
                        />
                    </div>

                    {/* Third Card */}
                    <div style={{ left: '12rem', top: '19rem' }}>
                        <Cards
                            emoji={Humble}
                            heading={'Mern Stack'}
                            detail={"React, MongoDB, Express Js, Node Js"}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services
