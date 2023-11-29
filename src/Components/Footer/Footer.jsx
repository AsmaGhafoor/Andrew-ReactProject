import React from 'react'
import './Footer.css'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook'
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram'
import Wave from '../../img/wave.png'

function Footer() {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: '100%' }} />
            <div className="f-content">
                <span>Asmaghafoor200@gmail.com</span>
                <div className="f-icons">
                    <UilReact color='white' size='3rem' />
                    <UilFacebook color='white' size='3rem' />
                    <UilInstagram color='white' size='3rem' />
                </div>
            </div>
        </div>
    )
}

export default Footer
