import React from "react";
import Card from './Card';
import Sdata from './Sdata';



const App = () => (
  <>
<h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
{Sdata.map((curval) => {
    return (
     <Card 
         key={curval.id}
        sname={curval.sname}
        imgsrc={curval.imgsrc}
        title= {curval.title}
        link={curval.link}
     /> 
    );
})}

</>
);

export default App;

