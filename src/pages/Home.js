import React from 'react';


import Featured from '../components/Featured';

 //replace later - just setting up boiler plate for now.
 import picture1 from '../images/pic01.jpg';

export default function Home( props ){
  
  const fake = {
    img: picture1,
  }

  return(
    <div>
      <Featured details={ fake }/>
    </div>
  );
}