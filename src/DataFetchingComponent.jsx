import React ,{useState,useEffect} from 'react'

const DataFetchingComponent = () => {

    const[data,setData]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/quotes');
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    },[]);

    if(loading){
        return(
            <div>
                Loading.......
            </div>
        )
    };

    if(error){
        return(
            <div>
                {error}
            </div>
        )
    }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}

export default DataFetchingComponent
