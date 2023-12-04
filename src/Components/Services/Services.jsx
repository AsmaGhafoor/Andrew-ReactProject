import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Cards from '../Cards/Card'
import DummyResume from '../Services/DummyResume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'


function Services() {
    const transition = { duration: 1, type: 'spring' }

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div>
            <div className="services" id='Services'>
                {/* left side */}
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
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
                    <motion.div
                        // initial={{ left: '25rem' }}
                        // whileInView={{ left: '14rem' }}
                        // transition={transition}
                        style={{ left: '14rem' }}>
                        <Cards
                            emoji={HeartEmoji}
                            heading={'Design'}
                            detail={"Figma, Sketch, Photoshop, Adobe xd"}
                        />
                    </motion.div>

                    {/* Second Card */}
                    <motion.div
                        // initial={{ left: '12rem' }}
                        // whileInView={{ left: '-4rem' }}
                        // transition={transition}
                        style={{ left: '-4rem', top: '12rem' }}>
                        <Cards
                            emoji={Glasses}
                            heading={'Developer'}
                            detail={"Html, CSS, JavaScript, ReactJS, NodeJS"}
                        />
                    </motion.div>

                    {/* Third Card */}
                    <motion.div
                        // initial={{ left: '12rem' }}
                        // whileInView={{ left: '19rem' }}
                        // transition={transition}
                        style={{ left: '12rem', top: '19rem' }}>
                        <Cards
                            emoji={Humble}
                            heading={'Mern Stack'}
                            detail={"React, MongoDB, Express Js, Node Js"}
                        />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Services
