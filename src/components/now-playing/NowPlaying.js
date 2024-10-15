import React,{useState} from 'react'
import moviesList from '../../data/movies';
import SearchInput from '../SearchInput';
const NowPlaying = () => {

    const [searchInp, setSearchInp] = useState('');

    const [movies, setMovies] = useState(moviesList);
  
    const onSearch = () => {
      if(searchInp.length > 0){
        const filtered = moviesList.filter(mve => mve.name.toLowerCase().includes(searchInp.toLowerCase()))
        
        setMovies(filtered)
      } else {
         setMovies(moviesList)
      }
       
    }

  return (
    <div>
    <div style={{display:'flex' , justifyContent:'space-between', alignItems:'center', marginRight : '10%'}}>
         <h1 className='title' data-testid="nowShowingTitle">Now Showing</h1>
         <SearchInput value={searchInp} setValue={setSearchInp} onSearch={onSearch} />
      </div>
     
        <div className='moviesListContainer' data-testid='movie-list'>
        {
          movies.map((item, index) => {
             return (
               <div key={index} className='movieContainer' data-testid={`movie-${item.id}`}>
                 <img src={item.image} alt='poster of Movie' className='moviePoster' data-testid={`movie-poster-${item.id}`} />
                 <p style={{fontSize:16, margin:'0px 5px 10px 5px', color : 'white'}} data-testid={`movie-title-${item.id}`}>{item.name}</p>
               </div>
             )
          })
         }

         {
          movies.length === 0 && 
          <h2 style={{textAlign : 'center', color:'white'}}>No Movies Found</h2>
         }
        </div>
        </div>
  )
}

export default NowPlaying