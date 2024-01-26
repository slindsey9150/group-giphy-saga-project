import { useSelector } from "react-redux";
import SearchGifs from "../SearchGif/SearchGif";

function App() {

  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchGifs/>
      {/* <img src={gifImage.data.images.original.url}/> */}
    </div>
  );
}


export default App;
