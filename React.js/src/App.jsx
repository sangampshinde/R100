// import React from 'react'
// import HelloWorld from './HelloWorld'

// const App = () => {
//   return (
//     <div>
//       <HelloWorld />
//       <HelloWorld />
//     </div>
//   )
// }

// export default App

// =================================

// import React from 'react'
// import Greeting from './Greeting'

// const App = () => {
//   return (
//     <div>
//       <Greeting name='tony'/>
//       <Greeting name="Bob"/>
//       <Greeting name="Charlie"/>
//     </div>
//   )
// }

// export default App

// ========================================
// import React from 'react';
// import ItemList from './ItemList';

// const App = () => {
//   return (
//     <div>
//       <ItemList/>
//     </div>
//   )
// }

// export default App;

// ===============================================
// import React from 'react';
// import Greeting1 from './Greeting1';
// import Farewell from './Farewell';

// const App = () => {

//   const isGreeting = false;

//   return (
//     <div>
//         <h1>Conditional Rendering Example</h1>
//         {isGreeting ? <Greeting1/> : <Farewell/>}
//     </div>
//   )
// }

// export default App
// =================================================
// import React from 'react'

// const App = () => {
//   const handleClick = () => {

//     alert('Button clicked!');

// };
//   return (
//     <div>
//       <h1>Event Handling Example</h1>
//       <button onClick={handleClick}>Click Me!</button>
//     </div>
//   )
// }

// export default App

// =====================================================
// import React,{useState} from 'react'

// const App = () => {
//   const [count, setCount] = useState(0);

//   const Increase = () => {
//     return setCount(count + 1);
//   };
//   const Decrease = () => {
//     return setCount(count - 1);
//   }

//   return (
//     <div>
//       <p>Counter:{ count }</p>
//       <button onClick={Increase}>Increase</button>
//       <button onClick={Decrease}>Decrease</button>
      
//     </div>
//   )
// }

// export default App

// ==============================================
// import React, { useState } from 'react';

// const App = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   }
//   return (

//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Controlled Input Example</h1>
//       <h2>You typed: {inputValue}</h2>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder='Type Something ...'
//       />
//     </div>
//   )
// }

// export default App
// =================================================
// import React from 'react'
// import DefaultProps from './DefaultProps'
// import DefaultProps1 from './DefaultProps1'



// const App = () => {
//   return (
//     <div>
//       <DefaultProps />
//       <DefaultProps name="tony" age={40} />
//       <DefaultProps1/>
//     </div>
//   )
// }

// export default App

// ===============================================
// import React from 'react'
// import UserCard from './UserCard'

// const App = () => {

//     const users = [
//         { id: 1, name: 'tony', age: 40 },
//         { id: 2, name: 'peter', age: 23 },
//         { id: 3, name: 'bruce', age: 35 },
//         { id: 4, name: 'dr strange', age: 40 }
//     ]

//     return (
//         <div style={{ textAlign: 'center', marginTop: '5px', padding: '2px', display:'flex'}}>
//             {users.map((user, i) => (
//                 <UserCard key={user.id} name={user.name} age={user.age} />
//             ))}
//     </div>
//   )
// }
// export default App

// ==========================================================
// import React from 'react'
// import Profile from './Profile'

// const App = () => {

//   const user = {
//     name: 'tony',
//     age: 40,
//     location: 'New York'
//   };

//   return (
//     <div>
//       <Profile name={user.name} age={user.age} location={user.location} />
      
//     </div>
//   )
// }

// export default App

// ============================================================================

// import React from 'react'
// import UserForm from './UserForm'

// const App = () => {
//   return (
//     <div>
//       <UserForm />
//     </div>
//   )
// }

// export default App

// ============================================================================
// import React from 'react'
// import TemperatureConverter from './TemperatureConverter';


// const App = () => {
//   return (
//     <div>
//       <center>
//       <TemperatureConverter/>
//       </center>
      
      
//     </div>
//   )
// }

// export default App;

// ===================================================================================

// import React, { useState } from 'react';


// const App = () => {
//   const [count, setCount] = useState(0);
//   const increment = () => {

//     setCount(prevCount => prevCount + 1);
    
//   }
//   const decrement = () => {

//     setCount(prevCount => prevCount - 1);
    
//   }

//   return (
//     <div>
//       <h1>Counter:{count}</h1>
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>decrement</button>
//     </div>
//   )
// }

// export default App


// ============================================================================
// import React from 'react'
// import ToggleComponent from './ToggleComponent'

// const App = () => {
//   return (
//     <div>
//       <ToggleComponent/>
//     </div>
//   )
// }

// export default App

// ===========================================================================
// import React from 'react'
// import TwoWayDataBinding from './TwoWayDataBinding'

// const App = () => {
//   return (
//     <div>
//       <TwoWayDataBinding/>
//     </div>
//   )
// }

// export default App

// =============================================
// import React from 'react'
// import StateArrayExample from './StateArrayExample'

// const App = () => {
//   return (
//     <div>
//       <StateArrayExample />
      
//     </div>
//   )
// }

// export default App

// ===================================================
// import React from 'react'
// import MyComponent from './MyComponent'

// const App = () => {
//   return (
//     <div>
//       <MyComponent/>
//     </div>
//   )
// }

// export default App

// ======================================================
// import React from 'react'
// import MyComponent1 from './MyComponent1'

// const App = () => {
//   return (
//     <div>
//       <MyComponent1/>
//     </div>
//   )
// }

// export default App


// ============================================================
// import React from 'react'
// import UserList from './UserList'

// const App = () => {
//   return (
//     <div>
//       <UserList/>
//     </div>
//   )
// }

// export default App

// ====================================================
// import React from 'react'
// import UserProfile1 from './UserProfile1'

// const App = () => {
//   return (
//     <div>
//       <UserProfile1/>
      
//     </div>
//   )
// }

// export default App

// ============================================================
// import React from 'react'
// import DataFetchingComponent from './DataFetchingComponent'

// const App = () => {
//   return (
//     <div>
//       <DataFetchingComponent/>
//     </div>
//   )
// }

// export default App

// ===================================================================
// import React from 'react'
// import TitleUpdater from './TitleUpdater'

// const App = () => {
//   return (
//     <div>
//       <TitleUpdater/>
//     </div>
//   )
// }

// export default App

// =======================================================
// import React from 'react'
// import WindowResizeListener from './WindowResizeListener'

// const App = () => {
//   return (
//     <div>
//       <WindowResizeListener/>
//     </div>
//   )
// }

// export default App
// ========================================================
// import React from 'react'
// import DataFetchingComponent1 from './DataFetchingComponent1'

// const App = () => {
//   return (
//     <div>
//       <DataFetchingComponent1/>

//     </div>
//   )
// }

// export default App

// ==============================================
// import React,{ useState } from 'react'
// import ProductDetail from './ProductDetail';

// const App = () => {
//   const [productId, setProductId] = useState(1);


//   const handleChangeProduct = ()=>{
//     setProductId(prevId=>(prevId === 1 ? 2 : 1))
//   }

//   return (
//     <div>
//       <button onClick={handleChangeProduct}>Toggle Product</button>
//       <ProductDetail productId={productId}/>
//     </div>
//   )
// }

// export default App

// ===================================================================
// import React from 'react'
// import TimerComponent from './TimerComponent'

// const App = () => {
//   return (
//     <div>
//       <TimerComponent/>
//     </div>
//   )
// }

// export default App
// ======================================================
// import React from 'react'
// import MyComponent2 from './MyComponent2'

// const App = () => {
//   return (
//     <div>
//       <MyComponent2/>
//     </div>
//   )
// }

// export default App

// =======================================
// import React from 'react'
// import MyComponent3 from './MyComponent3'
// const App = () => {
//   return (
//     <div>
//       <MyComponent3/>
//     </div>
//   )
// }

// export default App

// =============================================
// import React from 'react'
// import MyComponent4 from './MyComponent4';

// const App = () => {


//   return (
//     <div>
//       <MyComponent4/>
//     </div>
//   )
// }

// export default App

//============================================================
// import React from 'react'
// import MyComponent5 from './MyComponent5'

// const App = () => {
  
//   return (
//     <div>
//       <MyComponent5/>
//     </div>
//   )
// }

// export default App

// ==========================================================
// import React from 'react'
// import ControlledForm from './ControlledForm'

// const App = () => {
//   return (
//     <div>
//       <ControlledForm/>
//     </div>
//   )
// }

// export default App
// ================================================================
// import React from 'react'
// import FormSubmissionExample from './FormSubmissionExample'

// const App = () => {
//   return (
//     <div>
//       <FormSubmissionExample/>
//     </div>
//   )
// }

// export default App

// ====================================================================
// import React from 'react'
// import ControlledUncontrolledExample from './ControlledUncontrolledExample'

// const App = () => {
//   return (
//     <div>
//       <ControlledUncontrolledExample/>
//     </div>
//   )
// }

// export default App

// =============================================================
// import React from 'react'
// import CheckboxExample from './CheckboxExample'

// const App = () => {
//   return (
//     <div>
//       <CheckboxExample/>
//     </div>
//   )
// }

// export default App

// ==========================================================
// import React from 'react'
// import MultiInputForm from './MultiInputForm'

// const App = () => {
//   return (
//     <div>
//       <MultiInputForm/>
//     </div>
//   )
// }

// export default App

// =============================================================
// import React from 'react'
// import RadioButtonExample from './RadioButtonExample'

// const App = () => {
//   return (
//     <div>
//       <RadioButtonExample/>
//     </div>
//   )
// }

// export default App

// ====================================================================
// import React from 'react'
// import SelectDropdownExample from './SelectDropdownExample'

// const App = () => {
//   return (
//     <div>
//       <SelectDropdownExample/>
//     </div>
//   )
// }

// export default App

// ===============================================================
// import React from 'react'
// import FormWithValidation from './FormWithValidation'

// const App = () => {
//   return (
//     <div>
//       <FormWithValidation/>
//     </div>
//   )
// }

// export default App

// ==============================================================
// import React from 'react'
// import DynamicForm from './DynamicForm'

// const App = () => {
//   return (
//     <div>
//       <DynamicForm/>
//     </div>
//   )
// }

// export default App


// =============================================
// import React from 'react'
// import MyForm from './MyForm'

// const App = () => {
//   return (
//     <div>
//       <MyForm/>
//     </div>
//   )
// }

// export default App

// ==================================================
// react router Dom
// import React from 'react'
// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
// import Home from './Router/Home';
// import About from './Router/About';
// import Contact from './Router/Contact';

// const App = () => {
//   return (
//     <div>
//      <Router>
//       <div>
//         <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>

//           <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="/contact" element={<Contact/>}/>
//           </Routes>
//         </nav>
//       </div>
//      </Router>
//     </div>
//   )
// }

// export default App


// =====================================================================
// Route Parameters: Create dynamic routes that accept parameters (e.g., /user/:id).
// import React from 'react'
// import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
// import User from './Router/User';

// const App = () => {
//   return (
//     <div>
//     <Router>
//       <div>
//       <h1>User Profiles</h1>
//       <nav>
//         <ul>
//           <li><Link to="/user/1">User1</Link></li>
//           <li><Link to="/user/2">User2</Link></li>
//           <li><Link to="/user/3">User3</Link></li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/user/:id" element={<User/>}/>
//       </Routes>
//       </div>
//     </Router>
//     </div>
//   )
// }

// export default App

// =============================================================================
//Programmatic Navigation: Use useNavigate or history.push() to navigate between pages.

// import React from 'react'
// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
// import Home1 from './Router/Home1'
// import UserProfile from './Router/UserProfile'

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/user/:id" element={<UserProfile/>}/>
//           <Route path="/" element={<Home1/>}/>
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App

// =====================================================================================
// Nested Routes: Implement nested routes within a parent route.

// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Dashboard from './NRoutes/Dashboard'
// import Profile from './NRoutes/Profile'
// import Settings from './NRoutes/Settings'

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<h1>Welcome to Home Page</h1>}/>
//           <Route path="dashboard" element={<Dashboard/>}>
//             <Route path="profile" element={<Profile/>}/>
//             <Route path="settings" element={<Settings/>}/>
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App

// use it by going to http://localhost:5173/dashboard

// ===============================================================================================
// Redirect Users: Use <Redirect> or navigate to redirect users based on a condition.



// using<Navigate/>

// import React from 'react';
// import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
// import HomeC from './RC/HomeC';
// import LoginC from './RC/LoginC';
// import ProtectedC from './RC/ProtectedC';

// const App = () => {

//   const isAuthonticated = false;

//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomeC/>} />
//           <Route path="/login" element={<LoginC/>}/>
//           <Route path="/protected" element={isAuthonticated?<ProtectedC/>:<Navigate to="/login"/>}/>
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App


// --------------------------------------------------

// useNavigate() Hook

// import React from 'react';
// import {BrowserRouter as Router, Routes, Route,useNavigate} from "react-router-dom"
// import LoginForm from "./RC/LoginForm"
// import Dashboard from './RC/Dashboard';

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<LoginForm/>}/>
//           <Route path="/dashboard" element={<Dashboard/>}/>
//         </Routes>
//       </Router>

//     </div>
//   )
// }

// export default App

// =================================================================================
// Protected Routes: Implement a protected route that requires authentication.
// import React, { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomeComponent from "./PR/HomeComponent"
// import LoginComponent from "./PR/LoginComponent";
// import ProtectedRoute from "./PR/ProtectedRoute";
// import ProtectedComponent from "./PR/ProtectedComponent";
// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     return localStorage.getItem('isAuthenticated') === 'true';
//   });
//   const handleLogin = () => {
//     setIsAuthenticated(true);
//     localStorage.setItem('isAuthenticated', 'true'); 
//   };
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem('isAuthenticated'); 
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginComponent onLogin={handleLogin} />} />
//         <Route path="/protected" element={<ProtectedRoute element={<ProtectedComponent onLogout={handleLogout} />} isAuthenticated={isAuthenticated} />} />
//         <Route path="/" element={<HomeComponent />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// =======================================================================================
// 404 Not Found Page: Implement a default fallback route for unmatched URLs.
// import React from 'react'
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Home from './PNF/Home';
// import About from './PNF/About';
// import NotFound from './PNF/NotFound';
// const App = () => {
//   return (
//     <div>
//       <Router>
//           <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="*" element={<NotFound/>}/>
//           </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App


// =====================================================================================
//   Lazy Loading Routes: Use React.lazy() and Suspense to lazy load routes.
// import React,{lazy, Suspense} from 'react'
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

// const Home = lazy(()=>import('./LL/Home'))
// const About = lazy(()=>import ('./LL/About'))
// const Contact = lazy(()=>import("./LL/Contact"))
// const NotFound = lazy(()=>import("./LL/NotFound"))

// const App = () => {
//   return (
//     <div>
//       <Router>
//           <Suspense fallback={<div>Loading ......</div>}>
//             <Routes>
//               <Route path="/" element={<Home/>}/>
//               <Route path="/about" element={<About/>}/>
//               <Route path="/contact" element={<Contact/>}/>
//               <Route path="*" element={<NotFound/>}/>
//             </Routes>
//           </Suspense>

//       </Router>
//     </div>
//   )
// }

// export default App

// =================================================================================
//  NavLinks: Use NavLink to create navigation links with active state styles.

// import React from 'react';
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
// import Home from './NavLink/Home'
// import About from './NavLink/About'
// import Contact from './NavLink/Contact'
// import Navigation from './NavLink/Navigation';
// const App = () => {
//   return (
//     <div>
//       <Router>
//       <Navigation/>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/contact" element={<Contact/>}/>
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App;


// ==============================================================================
//  Fetch Data Based on Route Parameter: Fetch data from an API based on dynamic route params.

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetails from './useParams/UserDetails'

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/user/:id" element={<UserDetails/>} />
    </Routes>
  </Router>
  )
}

export default App