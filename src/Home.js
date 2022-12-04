import Movie from "./Movie";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <div className="container">
        
       <div className="search">
        <Search></Search>
       </div>
       
       <div className="col"><h1 className="">Movies</h1></div>
        <Movie />
      </div>
    </>
  );
};

export default Home;