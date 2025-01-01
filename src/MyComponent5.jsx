import React,{ useState, useEffect } from 'react';


const MyComponent5 = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setDebouncedSearchQuery(searchQuery);
        },500) 
        return () => clearTimeout(timeoutId);
    },[searchQuery]);


    useEffect(() => {
        if (debouncedSearchQuery) {
          setIsLoading(true);
          fetch(`https://dummyjson.com/products/search?q=${debouncedSearchQuery}`)
          .then(response => response.json())
          .then(data=>{
            setSearchResults(data.products);
            setIsLoading(false);})
          .catch(error=>{
            console.error('API error:', error);
            setIsLoading(false);
          });
        }else{
            setSearchResults([]);
            setIsLoading(false);
        }
      },[debouncedSearchQuery]);

      useEffect(()=>{
        if(isLoading){
            console.log('Loading......')
        }else{
            console.log('Loaded!')
        }
      },[isLoading])

  return (
    <div>
        <h1>Search Results</h1>
        <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        />
        <ul>
            {
                isLoading ? (<li>Loading...</li>):searchResults.length > 0 ? (searchResults.map(item=>(
                    <li key={item.id}>{item.title}</li>
                ))):(<li>No results found.</li>)
            }
        </ul>

    </div>
  )
}

export default MyComponent5