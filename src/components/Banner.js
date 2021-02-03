import React from 'react';

export default function Banner( props ){


  return(
    <div id="banner-wrapper">
    <div id="banner" className="box container">
        <div className="row">
            <div className="col-7 col-12-medium">
                <h2>Every true "foodie" worth their salt knows that some of the best food in any city can be found on food trucks</h2>
                <p>Find the best food trucks near you!</p>
            </div>
            <div className="col-5 col-12-medium">
                <ul>
                    <li><a href="/" className="button large icon solid fa-arrow-circle-right">Ok let's go</a></li>
                    <li><a href="/" className="button alt large icon solid fa-question-circle">More info</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  );
}