import React from 'react';


/**
 * CUSTOM IMPORTS
 */
export default function FeaturedCard( props ){
    //add props later once when know what we want to display.
    const { img } = props;
  return(
    <div class="col-4 col-12-medium">
        <section class="box feature">
            <a href="/" class="image featured"><img src={ img } alt="" /></a>
            <div class="inner">
                <header>
                    <h2>Put something here</h2>
                    <p>Maybe here as well I think</p>
                </header>
                <p>Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet bibendum tristique fringilla.</p>
            </div>
        </section>        
    </div>
  );
}