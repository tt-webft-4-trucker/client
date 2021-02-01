import React from 'react';

 //replace later - just setting up boiler plate for now.
 import picture1 from '../images/pic01.jpg';
 import picture2 from '../images/pic02.jpg';
 import picture3 from '../images/pic03.jpg';



/**
 * CUSTOM IMPORTS 
 */

import FeaturedCard from './FeaturedCard';


export default function Featured( props ){


  return(
    <div id="features-wrapper">
    <div class="container">
        <div class="row">
            <FeaturedCard img={ picture1 } />
            <FeaturedCard img={ picture2 } />
            <FeaturedCard img={ picture3 } />
        </div>
    </div>
</div>
  );
}