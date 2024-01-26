import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, Fragment, useState } from 'react'



function SearchGifs () {
    const gifImage = useSelector(store => store.gifSearchReducer)

 

    const gifFav = useSelector(store => store.gifFavReducer)
    // const gifPath = gifImage[0].images.original.url
    let gifImageArray = gifImage.data


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

  

    const SearchGif = () => {
        console.log('I\'m a gif');
        dispatch({type:'FETCH_GIFS'})
    } 
    const addGif = (event) => {
        event.preventDefault()
        console.log("Your wild button!");
        const payload = gifImageArray[0].images.original.url
        console.log(payload);
        dispatch({type: 'ADD_GIF', payload})        
    }


  
 
    return (
        <>
        <h3>Gifs loading . . .</h3>

        <form onSubmit = {handleSubmit}>
            <input id='searchField' type="text" />
            <button>Search</button>
        </form>
        
        {/* {<img src={gifImage.data[0].images.original.url}/>} */}
       

        

        {/* <pre>{gifImageArray.map((giphy, i) => {
            return (
                <Fragment key = {i}>
                    <p>{giphy.data.url}</p>
                </Fragment>
            )
        })}</pre> */}
         <pre>{gifImageArray.map((giphy, i) => {
                return (
                <Fragment key={i}>
                <img id={giphy.id} src ={giphy.images.original.url}/>
                <button onClick = {(event) => {addGif(event)}}>Wild!</button>
                </Fragment>
                )
            })}</pre>

        
        </>
    ) 
}





export default SearchGifs