import { useSelector } from "react-redux";
import SearchGifs from "../SearchGif/SearchGif";

function App() {
  const gifImage = useSelector(store => store.gifSearchReducer)
  // console.log("gifImage:", gifImage);
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchGifs/>
      {/* <img src={gifImage.data.images.original.url}/> */}
    </div>
  );
}


export default App;
