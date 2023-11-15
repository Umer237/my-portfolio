import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
   <div>
   <div id="loader">
  <div className="position-center-center">
    <div className="ldr"></div>
  </div>
</div>
<div id="wrap"> 
  
  
  <div id="cd-nav" className="cd-nav">
    <div className="cd-navigation-wrapper">
      <div className="position-center-center">
        <div className="col-sm-5">
          
          <nav>
            <ul className="cd-primary-nav">
              <li className="active"> <a href="index.html">Home </a></li>
              <li> <a href="about-us_01.html">About </a> </li>
              <li className="drop-menu"> <a href="#." className="title collapsed" data-toggle="collapse" data-target="#down-1"> shop </a>
                  <div className="collapse" id="down-1">
                    <div className="well">
                      <ul>
                        <li> <a href="shop_01.html">Shop 1</a> </li>
                        <li> <a href="shop_02.html">Shop 2</a> </li>
                        <li> <a href="shop_03.html">Shop 3</a> </li>
                        <li> <a href="shop_04.html">Shop 4</a> </li>
                        <li> <a href="product-detail_01.html">Product Detail 01</a> </li>
                        <li> <a href="product-detail_02.html">Product Detail 02</a> </li>
                        <li> <a href="shopping-cart.html">Shopping Cart</a> </li>
                        <li> <a href="checkout.html">Checkout </a> </li>
                      </ul>
                    </div>
                  </div>
                </li>
              <li> <a href="blog-list_01.html"> Blog</a> </li>
              <li> <a href="contact.html"> contact</a> </li>
              </ul>
          </nav>
          
          
          <ul className="social_icons">
            <li><a href="#."><i className="icon-social-facebook"></i></a></li>
            <li><a href="#."><i className="icon-social-twitter"></i></a></li>
            <li><a href="#."><i className="icon-social-tumblr"></i></a></li>
            <li><a href="#."><i className="icon-social-youtube"></i></a></li>
            <li><a href="#."><i className="icon-social-dribbble"></i></a></li>
          </ul>             
        </div>
        
        
        <div className="col-sm-7">
      </div>
      </div>
    </div>
  </div>

  <header className="header-2">
    <div className="container-fluid">
      <div className="sticky"> 
        
        
        <a href="#cd-nav" className="cd-nav-trigger"><span className="cd-nav-icon"></span> 
        
        
        <svg x="0px" y="0px" width="54px" height="54px" viewBox="0 0 54 54">
        <circle fill="transparent" stroke="#2d3a4b" stroke-width="1" cx="27" cy="27" r="25" stroke-dasharray="157 157" stroke-dashoffset="157"></circle>
        </svg> </a> 
        
        <div className="logo logo-center"> <a href="#."><img className="img-responsive" src="images/logo-2.png" alt="" /></a> </div>
        
        <nav className="navbar"> 
          
          <div className="nav-right">
            <ul className="navbar-right">
              
              
              <li className="dropdown user-acc"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" ><i className="icon-user"></i> </a>
                <ul className="dropdown-menu">
                  <li>
                    <h6>HELLO! Jhon Smith</h6>
                  </li>
                  <li><a href="#">MY CART</a></li>
                  <li><a href="#">ACCOUNT INFO</a></li>
                  <li><a href="#">LOG OUT</a></li>
                </ul>
              </li>
              
              
              <li className="dropdown user-basket"> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="icon-basket-loaded"></i> </a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="media-left">
                      <div className="cart-img"> <a href="#"> <img className="media-object img-responsive" src="images/cart-img-1.jpg" alt="..."/> </a> </div>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading">WOOD CHAIR</h6>
                      <span className="price">129.00 USD</span> <span className="qty">QTY: 01</span> </div>
                  </li>
                  <li>
                    <div className="media-left">
                      <div className="cart-img"> <a href="#"> <img className="media-object img-responsive" src="images/cart-img-2.jpg" alt="..."/> </a> </div>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading">WOOD STOOL</h6>
                      <span className="price">129.00 USD</span> <span className="qty">QTY: 01</span> </div>
                  </li>
                  <li>
                    <h5 className="text-center">SUBTOTAL: 258.00 USD</h5>
                  </li>
                  <li className="margin-0">
                    <div className="row">
                      <div className="col-xs-6"> <a href="shopping-cart.html" className="btn">VIEW CART</a></div>
                      <div className="col-xs-6 "> <a href="checkout.html" className="btn">CHECK OUT</a></div>
                    </div>
                  </li>
                </ul>
              </li>
              
              
              <li className="dropdown"> <a href="javascript:void(0);" className="search-open"><i className=" icon-magnifier"></i></a>
                <div className="search-inside animated bounceInUp"> <i className="icon-close search-close"></i>
                  <div className="search-overlay"></div>
                  <div className="position-center-center">
                    <div className="search">
                      <form>
                        <input type="search" placeholder="Search Shop"/>
                        <button type="submit"><i className="icon-check"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
  
 
  <main> 
    
    
    <section className="home-slider simple-head" data-stellar-background-ratio="0.5"> 
      

      <div className="container-fluid">
        <div className="position-center-center"> 
          
          
          <div className="col-lg-7 col-lg-offset-5"> <span className="price"><small>$</small>299</span>
            <h4>The Latest Product from ecoshop</h4>
            <h1 className="extra-huge-text">look hot
              with style</h1>
            <div className="text-center"> <a href="#." className="btn btn-round margin-top-40">SHOP NOW</a> </div>
          </div>
        </div>
      </div>
    </section>
    

    <div id="content"> 
      
    
      <section className="padding-top-150 padding-bottom-150">
        <div className="container"> 
          
          
          <div className="heading text-center">
            <h4>new arrival</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus maximus vehicula. 
            Sed feugiat, tellus vel tristique posuere, diam</span> </div>
          
          
          <div className="new-arrival-list">
            <ul className="row">
              
              
              <li className="col-md-6"> 
                
             
                <article> <img className="img-responsive" src="images/new-ar-img-1.jpg" alt=""/>
                  <div className="position-center-center">
                    <h4><a href="#.">leather bag</a></h4>
                    <a href="#." className="btn btn-small btn-round">MORE</a> </div>
                </article>
                
              
                <article> <img className="img-responsive" src="images/new-ar-img-2.jpg" alt=""/>
                  <div className="position-center-center">
                    <h4><a href="#.">graphiti tshirt</a></h4>
                    <a href="#." className="btn btn-small btn-round">MORE</a> </div>
                </article>
              </li>
              <li className="col-md-6"> 
                
               
                <article> <img className="img-responsive" src="images/new-ar-img-3.jpg" alt=""/>
                  <div className="position-center-center">
                    <h4><a href="#.">leather bag</a></h4>
                    <a href="#." className="btn btn-small btn-round">MORE</a> </div>
                </article>
                
              
                <article> <img className="img-responsive" src="images/new-ar-img-4.jpg" alt=""/>
                  <div className="position-center-center">
                    <h4><a href="#.">female tshirt</a></h4>
                    <a href="#." className="btn btn-small btn-round">MORE</a> </div>
                </article>
              </li>
            </ul>
            
            
            <div className="text-center margin-top-50"> <a href="#." className="btn btn-small btn-round"> SHOW MORE...</a> </div>
          </div>
        </div>
      </section>
      

      <section className="padding-bottom-150">
        <div className="container"> 
          
        
          <div className="heading text-center">
            <h4>popular products</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus maximus vehicula. 
            Sed feugiat, tellus vel tristique posuere, diam</span> </div>
          
               <div className="papular-block block-slide"> 
            
  
            <div className="item"> 
            
              <div className="item-img"> <img className="img-1" src="images/shop-3-img-1.jpg" alt="" /> <img className="img-2" src="images/shop-3-img-4.jpg" alt="" /> 
            
                <div className="overlay">
                  <div className="position-center-center"> <a href="#." className="btn btn-small btn-round">MORE</a> </div>
                </div>
              </div>
              
              <div className="item-name"> <a href="#.">GRAY TOPER</a> </div>
              
            </div>
            
 
            <div className="item"> 
      
              <div className="item-img"> <img className="img-1" src="images/shop-3-img-2.jpg" alt="" /> <img className="img-2" src="images/shop-3-img-4.jpg" alt="" /> 
      
                <div className="overlay">
                  <div className="position-center-center"> <a href="#." className="btn btn-small btn-round">MORE</a> </div>
                </div>
              </div>
                 <div className="item-name"> <a href="#.">casual bag</a> </div>
       
            </div>
            

            <div className="item"> 
       
              <div className="item-img"> <img className="img-1" src="images/shop-3-img-3.jpg" alt="" /> <img className="img-2" src="images/shop-3-img-4.jpg" alt="" /> 
       
                <div className="overlay">
                  <div className="position-center-center"> <a href="#." className="btn btn-small btn-round">MORE</a> </div>
                </div>
              </div>
       
              <div className="item-name"> <a href="#.">watch</a> </div>
  
            </div>
            
    
            <div className="item"> 
  
              <div className="item-img"> <img className="img-1" src="images/shop-3-img-4.jpg" alt="" /> <img className="img-2" src="images/shop-3-img-4.jpg" alt="" /> 
         
                <div className="overlay">
                  <div className="position-center-center"> <a href="#." className="btn btn-small btn-round">MORE</a> </div>
                </div>
              </div>
         
              <div className="item-name"> <a href="#.">SHOE</a> </div>
       
            </div>
          </div>
        </div>
      </section>
      

      <section className="special-offers">
        <div className="container">
          <div className="col-md-8 center-block">
            <h4>special</h4>
            <h1 className="extra-huge-text"> women’s
              sale </h1>
            <a href="#." className="btn btn-round margin-top-50"> SHOP NOW</a> </div>
        </div>
      </section>
      

      <section className="small-about padding-top-150 padding-bottom-150">
        <div className="container"> 
          
  
          <div className="heading text-center">
            <h4>about ecoshop</h4>
            <p>Phasellus lacinia fermentum bibendum. Interdum et malesuada fames ac ante ipsumien lacus, eu posuere odio luctus non. Nulla lacinia,
              eros vel fermentum consectetur, risus purus tempc, et iaculis odio dolor in ex. </p>
          </div>
      
          <ul className="social_icons">
            <li><a href="#."><i className="icon-social-facebook"></i></a></li>
            <li><a href="#."><i className="icon-social-twitter"></i></a></li>
            <li><a href="#."><i className="icon-social-tumblr"></i></a></li>
            <li><a href="#."><i className="icon-social-youtube"></i></a></li>
            <li><a href="#."><i className="icon-social-dribbble"></i></a></li>
          </ul>
        </div>
      </section>

      <section className="news-letter style-2 padding-top-150 padding-bottom-150">
        <div className="container">
          <div className="heading light-head text-center margin-bottom-30">
            <h4>NEWSLETTER</h4>
            <span>Phasellus lacinia fermentum bibendum. Interdum et malesuada fames ac ante ipsumien lacus, eu posuere odi </span> </div>
          <form>
            <input type="email" placeholder="Enter your email address" required/>
            <button type="submit">SEND ME</button>
          </form>
        </div>
      </section>
    </div>
    

    <footer>
      <div className="container"> 
        
   
        <div className="col-md-3">
          <div className="about-footer"> <img className="margin-bottom-30" src="images/logo-foot.png" alt="" />
            <p><i className="icon-pointer"></i> Street No. 12, Newyork 12, <br/>
              MD - 123, USA.</p>
            <p><i className="icon-call-end"></i> 1.800.123.456789</p>
            <p><i className="icon-envelope"></i> info@ecoshop.com</p>
          </div>
        </div>
        
        <div className="col-md-3">
          <h6>HELPFUL LINKS</h6>
          <ul className="link">
            <li><a href="#."> Products</a></li>
            <li><a href="#."> Find a Store</a></li>
            <li><a href="#."> Features</a></li>
            <li><a href="#."> Privacy Policy</a></li>
            <li><a href="#."> Blog</a></li>
            <li><a href="#."> Press Kit </a></li>
          </ul>
        </div>
        
        <div className="col-md-3">
          <h6>SHOP</h6>
          <ul className="link">
            <li><a href="#."> About Us</a></li>
            <li><a href="#."> Career</a></li>
            <li><a href="#."> Shipping Methods</a></li>
            <li><a href="#."> Contact</a></li>
            <li><a href="#."> Support</a></li>
            <li><a href="#."> Retailer</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6>MY ACCOUNT</h6>
          <ul className="link">
            <li><a href="#."> Login</a></li>
            <li><a href="#."> My Account</a></li>
            <li><a href="#."> My Cart</a></li>
            <li><a href="#."> Wishlist</a></li>
            <li><a href="#."> Checkout</a></li>
          </ul>
        </div>
      
        <div className="rights">
          <p>©  2016 ecoshop All right reserved. </p>
          <div className="scroll"> <a href="#wrap" className="go-up"><i className="lnr lnr-arrow-up"></i></a> </div>
        </div>
      </div>
    </footer>
  </main>
  </div>
  </div>
  )
}
