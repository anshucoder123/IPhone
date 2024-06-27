


// import App from 'App'
// import Navbar from './component/Navbar';
// function App () {
//   return(
//     <>
//        <Navbar/>
//     </>
//   )
// }
// export default App;

// import React from 'react';
// import Navbar from './component/Navbar';
// // import store from './redux/reducers/store';
// import Home from './component/Home';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Products from './component/Products';
// import Product from './component/Product';
// function App() {
//   return (
//     <>
//     <BrowserRouter>
//      <Navbar />
//     <Routes>
//      <Route  path="/home" element={<Home/>} />
//     <Route  path="/products" element={<Products/>} />
//     <Route  path="/products/:id" element={<Product/>} />
//     </Routes>
//     </BrowserRouter>

// </>
 
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import Product from './components/Product';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/products" component={Products} />
//         <Route path="/products/:id" component={Product} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;



// 2..

import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';
import Product from './component/Product';
import Contact from './component/Contact';
import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import Home from './component/Home';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
// import { Redirect } from 'react-router-dom';
function App(){
    return(
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
         <Route exact  path="/" Component={Home}/> 
         <Route exact path="/product" Component={Product}/>
         <Route exact path="/product/:id" Component={ProductDetail}/>  
         <Route exact path="/about" Component={About}/>
         <Route exact path="/cart" Component={Cart}/>
         <Route exact path="/checkout" Component={Checkout}/> 
         <Route exact path="/contact" Component={Contact}/> 
         <Route to="/"/>
        </Routes>
        
        <Footer/>
        </BrowserRouter>
        </>
    )
}
export default App;