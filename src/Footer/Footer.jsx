import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='f'>
         <div className="footer">
        <p>Contact me on social media</p>

        <div className="icons">
            <a href="https://www.instagram.com/manishayadav11234/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="mailto:manishayadav1360@gmail.com" target="_blank"><i className="fas fa-mailbox"></i></a>
            <a href="https://github.com/Manisha45yadav" target="_blank"><i className="fab fa-github-square"></i></a>
        </div>
        <div className="cpr">
            <h6> Designed by Manisha</h6>
                <h6>All rights Reserved</h6>
        </div>

        <div className='copyRight'>All Rights Reserved</div>
    </div>
    </div>
  )
}

export default Footer