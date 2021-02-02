import React from 'react';

export default function Header( props ){


  return(
    <div id="header-wrapper">
    <header id="header" class="container">

            <div id="logo">
                <h1><a href="/">Food Truck Tracker</a></h1>
            </div>

            <nav id="nav">
                <ul>
                    <li><a href="/">Register</a></li>
                    <li class="current"><a href="/">Login</a></li>
                </ul>
            </nav>

    </header>
</div>
  );
}