import React,{useState,useEffect} from 'react'

const UserList = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div>
        <h6>Loding please wait......</h6>
      </div>
    )
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {users.map((product) => (
            <li key={product.id} style={{ border: '1px solid #ccc', margin: '5px', padding: '10px', display: 'flex', alignItems: 'center' }}>
            <p style={{ margin: '0 10px' }}>{product.id}</p>
            <p style={{ margin: '0 10px' }}>{product.title}</p>
            <p style={{ margin: '0 10px' }}>${product.price}</p>
          </li>
          )
        )}
      </ul>      
    </div>
  )
}

export default UserList
