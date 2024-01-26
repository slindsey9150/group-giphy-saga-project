import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, Fragment, useState } from 'react'



function SearchGifs () {
    const gifImage = useSelector(store => store.gifSearchReducer)
    const gifFav = useSelector(store => store.gifFavReducer)
    // const gifPath = gifImage[0].images.original.url
    let gifImageArray = gifImage.data
//  console.log('gifImmageArray', gifImageArray);
    // console.log("gifImage:", gifImage);

    const dispatch = useDispatch()
    useEffect(() => {
        SearchGif()
    }, [])

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