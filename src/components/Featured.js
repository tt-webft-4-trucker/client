import React from 'react';


/**
 * CUSTOM IMPORTS 
 */

import FeaturedCard from './FeaturedCard';


export default function Featured( props ){

  const { details } = props;

  return(
    <div id="features-wrapper">
    <div class="container">
        <div class="row">
            <FeaturedCard img={ details.img } />
        </div>
    </div>
</div>
  );
}