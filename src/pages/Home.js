import React from 'react';


import Featured from '../components/Featured';
import Banner from '../components/Banner';
import Content from '../components/Content';

 //replace later - just setting up boiler plate for now.
 import picture1 from '../images/pic01.jpg';

export default function Home( props ){
  
  const fake = {
    img: picture1,
  }

  return(
    <div>
      <Banner />
      <Featured details={ fake }/>
      <Content />
    </div>
  );
}