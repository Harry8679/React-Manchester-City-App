import React from 'react';
import { Link } from 'react-router-dom';

import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png';

const CityLogo = ({ width, height, link, linkTo }) => {
    const template = <div className='img_cover' style={{ width, height, backgroundImage: `url(${mcitylogo})`}}></div>

    if (link) {
        return (
            <Link className='link_logo' to={linkTo}>{template}</Link>
        );
    } else {
        return template;
    }
}

export default CityLogo;