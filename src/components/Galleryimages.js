import React from 'react';
import classes from './Galaery.module.css';

const Galleryimages=({data})=>{
    return (
       <div className={classes.galleryimages}>
        {data.map((image) =><div key={image.id}>
       <div className={classes.imgstyle}>
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
         height="200" width="250" alt={image.title}/>
       </div>
        </div>)}
        </div>
    )
}

export default Galleryimages
