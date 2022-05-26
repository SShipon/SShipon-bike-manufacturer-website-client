import React from 'react';
import'./FooterIcon.css'
const FooterIcon = () => {
    return (
      <section class="">
        <div class=" card">
          <h2 className="header-text">AWESOME DEVELOPER</h2>
          <p className="mini-text">
            PIXEL PERFECT WEB DESIGN SOLUTIONS FOR YOU.
          </p>
          <ul className="main-footer">
            <li>
              <a href="https://github.com/SShipon">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/mdshipon.chowdhury.940">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://bd.linkedin.com/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
};

export default FooterIcon;