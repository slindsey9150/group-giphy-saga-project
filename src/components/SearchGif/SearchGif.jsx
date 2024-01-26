import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'



function SearchGifs () {
    const gifImage = useSelector(store => store.gifSearchReducer)
 
    console.log("gifImage:", gifImage);

    const dispatch = useDispatch()
  
   
        const SearchGif = () => {
            console.log('I\'m a gif');
            console.log("gifImage 2:", gifImage);

        
            dispatch({type:'FETCH_GIFS'})
        
         
            console.log("gifImage 2:", gifImage);

        } 

        let searchElement = ''
        const handleSubmit = (event) => {
            event.preventDefault()
             searchElement = document.getElementById('searchField').value
            console.log('searchElement:', searchElement);
            dispatch({type:'SET_SEARCH', payload:searchElement})
   
    }

  

  
 
    return (
        <>
        <h3>Gifs loading . . .</h3>
        <form onSubmit = {handleSubmit}>
            <input id='searchField' type="text" />
            <button>Search</button>
        </form>
        
        {/* {<img src={gifImage.data[0].images.original.url}/>} */}
       
        
        </>
    ) 
}





export default SearchGifs