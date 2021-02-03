import React from 'react';

import pic4 from '../images/pic04.jpg';
import pic5 from '../images/pic05.jpg';
import pic6 from '../images/pic06.jpg';
import pic7 from '../images/pic07.jpg';

export default function Content( props ){


  return(
    <div id="main-wrapper">
        <div className="container">
            <div className="row gtr-200">
                <div className="col-4 col-12-medium">
                    
                        <div id="sidebar">
                            <section className="widget thumbnails">
                                <h3>Interesting stuff</h3>
                                <div className="grid">
                                    <div className="row gtr-50">
                                        <div className="col-6"><a href="/" className="image fit"><img src={pic4} alt="" /></a></div>
                                        <div className="col-6"><a href="/" className="image fit"><img src={pic5} alt="" /></a></div>
                                        <div className="col-6"><a href="/" className="image fit"><img src={pic6} alt="" /></a></div>
                                        <div className="col-6"><a href="/" className="image fit"><img src={pic7} alt="" /></a></div>
                                    </div>
                                </div>
                                <a href="/" className="button icon fa-file-alt">More</a>
                            </section>
                        </div>

                </div>
                <div className="col-8 col-12-medium imp-medium">

                        <div id="content">
                            <section className="last">
                                <h2>So what's this all about?</h2>
                                <p>This is <strong>Verti</strong>, a free and fully responsive HTML5 site template by <a href="http://html5up.net">HTML5 UP</a>.
                                Verti is released under the <a href="http://html5up.net/license">Creative Commons Attribution license</a>, so feel free to use it for any personal or commercial project you might have going on (just don't forget to credit us for the design!)</p>
                                <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus. Praesent semper bibendum ipsum, et tristique augue fringilla eu. Vivamus id risus vel dolor auctor euismod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat. Aliquam luctus mattis lectus sit amet phasellus quam turpis.</p>
                                <a href="/" className="button icon solid fa-arrow-circle-right">Continue Reading</a>
                            </section>
                        </div>

                </div>
            </div>
        </div>
    </div>
  );
}