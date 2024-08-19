import React from 'react'
import classes from './Contact.module.css'

const Contact = () => {
  return (
    <div className={classes.container}>
        <div className={classes.innerContainer}>
            <p>Contact Us</p>
            <h4>For further questions, including partership oppurtunities, please email hello@furniturenew.com or contact us via our contact forms </h4>
        </div>
        <div className={classes.info}>
            <div className={classes.fullname}>
                <h4>FULL NAME</h4>
                <input type="text" placeholder="FULL NAME" />
            </div>    
            <div className={classes.email}>
                <h4>EMAIL</h4>
                <input type="email" placeholder="hello@furniturenew.com"/>
            </div>  
        </div>
        <div className={classes.help}>
            <div>
                <h4>How can we help you</h4>
                <input type="email" placeholder="describe your problem with less than 250 characters"/>
            </div>
        </div>
        <button>SEND MESSAGE</button>
    </div>
  )
}

export default Contact