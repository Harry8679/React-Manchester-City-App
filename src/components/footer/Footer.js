import React from 'react'
import CityLogo from '../utils/Tools';

const Footer = () => {
  let date = new Date();
  let current_year = date.getFullYear();
  return (
    <footer className='bck_blue'>
        <div className="footer_logo">
            <CityLogo
                link={true}
                linkTo='/'
                width='70px'
                height='70px'
            />
        </div>
        <div className="footer_descl">
            Manchester City {current_year}. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer;
