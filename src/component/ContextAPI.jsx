import ContextProvider from "../ContextAPI/ContextProvider"
import MovieList from "../DynamicContext/MovieList"
import MovieProvider from "../DynamicContext/MovieProvider"

const ContextAPI = () => {
  return (
    <div>

    <h1 style={{background:"#fca311ff"}}>Here is the example of ContextApi, I have used to make Dark and Light mode Theme</h1>
    <ContextProvider/>
    <br/>
    <br/>
    <br/>
    <h1 style={{background:"#fca311ff"}}>Here is the example of Dynamic context, I send the the movie data from MovieContext to MovieList, and render the Datas </h1>

    <MovieProvider>
      <MovieList/>
    </MovieProvider>


  </div>
  )
}

export default ContextAPI