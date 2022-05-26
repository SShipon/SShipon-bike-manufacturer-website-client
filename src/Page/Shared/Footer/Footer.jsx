import React from 'react';
import DateFooter from '../DateFooter/DateFooter.jsx';
import FooterIcon from '../FooterIcon/FooterIcon.jsx';
const Footer = () => {
    return (
      <section style={{ background: "black" }} className="mt-28">
        <footer style={{ color: "white" }} className=" p-10  ">
          <div className="footer">
            <div >
              <span className="footer-title">Services</span>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div>
              <span className="footer-title">Company</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div>
              <span className="footer-title">Legal</span>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
              <span className="footer-title">Help</span>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
          </div>
          <div className="my-10 text-center">
            <FooterIcon></FooterIcon>
            <div className="my-10 text-center">
              <p>
                Copyright
                <DateFooter /> All right reserved by Bake Service
              </p>
            </div>
          </div>
        </footer>
      </section>
    );
};

export default Footer;