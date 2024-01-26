import { useSelector, useDispatch } from 'react-redux'
import { useEffect, Fragment, useState } from 'react'



function SearchGifs () {
    

 

    // const gifFav = useSelector(store => store.gifFavReducer)
    // const gifPath = gifImage[0].images.original.url
    // let gifImageArray = gifImage.data
    const dispatch = useDispatch()
    const gifImage = useSelector(store => store.gifSearchReducer)
    let gifImageArray = gifImage.data



        let searchElement = ''
        let imgRender = {}
    const handleSubmit = (event) => {
            event.preventDefault()
            //added gifFav to handleSubmit to only have it render after the Submit
        console.log("gifImage", gifImage);
            // let gifImageArray = gifImage.data
             searchElement = document.getElementById('searchField').value
            console.log('searchElement:', searchElement);
            dispatch({type:'SEARCH_GIF', payload:searchElement})
            
            
      
   
    }

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

        <form onSubmit = {handleSubmit}>
            <input id='searchField' type="text" />
            <button>Search</button>

            
        </form>
        <pre>{gifImageArray?.map((giphy, i) => {
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