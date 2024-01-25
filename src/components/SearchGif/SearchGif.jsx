import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'



function SearchGifs () {
    const gifImage = useSelector(store => store.gifSearchReducer)
    // const gifPath = gifImage[0].images.original.url
 
    console.log("gifImage:", gifImage);

    const dispatch = useDispatch()
    useEffect(() => {
        SearchGif()
    }, [])

    const SearchGif = () => {
        console.log('I\'m a gif');

    
        dispatch({type:'FETCH_GIFS'})
    

    } 

    return (
        <>
        <h3>Gifs loading . . .</h3>
        {<img src={gifImage.data[0].images.original.url}/>}
        {<img src={gifImage.data[1].images.original.url}/>}
        {<img src={gifImage.data[2].images.original.url}/>}
        
        </>
    ) 
}





export default SearchGifs