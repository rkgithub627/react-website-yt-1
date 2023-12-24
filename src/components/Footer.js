import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <div className='Footer-container'>
    <section className='footer-subscription'>
        <p className='footer-Subscription-heading'>
            Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className='footer-seunscription-text'>
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form> 
                    <input
                     type="email" 
                     name="email"
                     placeholder='Your Email'
                    className='footer-input'
                    />
                    <Button buttonStyle='btn--outline'> Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-link'>
            <div className='footer- link- wrapper'>
                <div className='footer-link-items'>
                    <h2> About US</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                 </div>
                <div className='footer-link-items'>
                    <h2> About US</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
               </div>
               </div>
        <div className='footer- link- wrapper'>
                <div className='footer-link-items'>
                    <h2> videos</h2>
                    <Link to='/'>Submit video</Link>
                    <Link to='/'>Ambassador</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                    
                </div>
                <div className='footer-link-items'>
                    <h2> Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                 </div>
               </div>
            </div>
          <section className='Social-media'>
            <div className='Social-media-wrap'>
              <div className='footer-logo'>
                <Link to='/' className='social-logo'> MountEVerest Computec <i className='fab fa-typo3' />
               </Link>
                </div>
                <small className='website-rights'> MountEVerest Computec  @ 2020</small>
                <div className='social-icons'>
                    <Link className= 'Social-icon-link facebook'
                    to='/'
                    target='_blank'
                    area-label='Facebook'>
                    <i className='fab fa-facebook-f'/>
                    </Link>
                    <Link
                    className='Social -icon-link Instagram'
                    to='/'
                    target='_blank'
                    area-label='Instagram'
                    >
                    <i className='fab fa-Instagram' />
                    </Link>
                 <Link
                 className='Social -icon-link Linked In'
                 to='/'
                 target='_blank'
                 area-label='linked in'
                 >
                 <i className='fab fa-linked in'/>
                 </Link>
                 <Link
                 className='Social -icon-link Twitter'
                 to='/'
                 target='_blank'
                 area-label='Twitter' >
                 <i className='fab fa-Twitter'/>
                 </Link>
                 </div>
                 </div>
                </section>  
            </div>
    );
}

export default Footer
