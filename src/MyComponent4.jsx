import React,{ useEffect, useState } from 'react';

const MyComponent4 = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=>{
        if (searchQuery){
            fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
            .then(response=>response.json())
            .then(data => setSearchResults(data.products));
        }
    },[searchQuery]);

  return (
    <div>
        <h1>Search Results</h1>
        <input
        type='text'
        value={searchQuery}
        onChange={e=>setSearchQuery(e.target.value)}
        />
        
        <ul>
        {
            searchResults.map(item =>(
                <li key={item.id} > {item.title} </li>
            ))
        }
        </ul>

    </div>
  )
}

export default MyComponent4;