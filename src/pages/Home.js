import React from 'react';


import Featured from '../components/Featured';
import Banner from '../components/Banner';
import Content from '../components/Content';


export default function Home( props ){
  

  return(
    <div>
      <Banner />
      <Featured />
      <Content />
    </div>
  );
}