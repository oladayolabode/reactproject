import React from 'react'
import classes from './Home.module.css'
import furniture1 from '../img2.png'
import furniture2 from '../ojodu.png'
import furniture3 from '../amenestate.png'


const Home = () => {
  return (
    <div className={classes.container}>
        <div className={classes.innerContainer}>
            <div className={classes.title} >
                <p>FURNITURE MARKETING HUB</p>
                <h4>We offer the best services and deal with the sale of types of furniture ranging in diffrent sizes and level of comfort</h4>
                <button>FIND OUR MORE</button>
            </div>
            <div className={classes.discount}>
                <p>DISCOUNT SALE ON THESE FURNITURES THIS MONTH</p>
            </div>
            <div className={classes.furnitures}>
                <div>
                    <img src={furniture1} alt='furniture1'/>
                    <p>Executive Furniture</p>
                </div>
                <div>
                    <img src={furniture2} alt='furniture2'/>
                    <p>Presidential Furniture</p>
                </div>
                <div>
                    <img src={furniture3} alt='furniture3'/>
                    <p>Business Furniture</p>
                </div>
            </div>
            <div className={classes.contactus}>
                <button>CONTACT US</button>
            </div>
        </div>
    </div>
  )
}

export default Home