import React from 'react'
import Card from '../pages/Card'
import Nav  from '../pages/Nav'
import Home from '../pages/Home'
import { CartProvider } from 'react-use-cart'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import AllProducts from '../pages/AllProducts'
import Account from '../pages/Account'
import Footer from '../pages/Footer'
import { Provider } from 'react-redux'
import Blog from '../pages/Blog'
import BlogDetailsPage from '../pages/BlogDetailsPage'
import ProductDetails from '../pages/ProductDetails'
import TrackYourOrder from '../pages/TrackYourOrder'
import CheckOut from '../pages/CheckOut'
import CheckOutDetails from '../pages/CheckOutDetails'
import Payment from '../pages/Payment'
import Paymentend from '../pages/Paymentend'
import ScrollToTop from '../../ScrollToTop'

const AppRouter = () => {
    
 
    return (
    
        <BrowserRouter>
        <Switch>            
            <CartProvider>
           
     
            <Nav />
            <Route path="/" component={Home} exact></Route>
            <Route path="/about" component={About} exact></Route>
            <Route path="/contact" component={Contact} exact></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/blogs/:id" component={BlogDetailsPage}></Route>
            <Route path="/card" component={Card}></Route>
            <Route path="/allproducts" component={AllProducts}></Route>
            <Route path="/account" component={Account}></Route>
            <Route path="/products/:productId" component={ProductDetails}></Route>
            <Route path="/trackyourorder" component={TrackYourOrder}></Route>
            <Route path="/checkout" component={CheckOut}></Route>
            <Route path="/checkoutdetails" component={CheckOutDetails}></Route>
            <Route path="/pdetails" component={ProductDetails}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/paymentend" component={Paymentend}></Route>
            <Footer/>
            <ScrollToTop/>
            
            </CartProvider>
        </Switch>
        </BrowserRouter>

        
    )
}
export default AppRouter;