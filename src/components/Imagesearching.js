import React,{useState} from 'react';
import axios from 'axios';
import Galleryimages from './Galleryimages';

const Imagesearching = () => {
    const [search, setsearch] = useState("");
    const [data, setdata] = useState([]);
    const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
     const inputhandler=(e)=>{
         setsearch(e.target.value)
     }

    const formHandler=(e)=>{
        e.preventDefault();
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
        .then(res=>setdata(res.data.photos.photo))
    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <input type="text" onChange={inputhandler} value={search} /><br/><br/>
                <input type="submit" value="search" />
    
            </form>

            {(data.length>1)?<Galleryimages data={data} />:<p>no images</p>}
        </div>
    )
}

export default Imagesearching
