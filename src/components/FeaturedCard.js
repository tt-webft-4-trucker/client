import React from 'react';


/**
 * CUSTOM IMPORTS
 */
export default function FeaturedCard( props ){
    //add props later once when know what we want to display.
    const { details } = props;
  return(
    <div class="col-4 col-12-medium">
        <section class="box feature">
            <a href="/" class="image featured"><img src={ details.img_url } alt="" /></a>
            <div class="inner">
                <header>
                    <h2>{ details.name }</h2>
                    <p>Rating: { details.customer_rating_avg }</p>
                </header>
                <p>Cuisine Type: { details.cuisine_type }</p>
            </div>
        </section>        
    </div>
  );
}