import React from 'react';
import "../styles/footer.css";


function Footer() {
    return (
   
        <footer className="footer">
      <div className="social-links">
        <ul >
        <li ClassName="list-inline-item"><a href="https://github.com/Camdah77"><i class="fa-brands fa-github fa-fw" ></i></a></li> 
        <li ClassName="list-inline-item"><a href="https://facebook.com/Artbyanuya/"><i class="fa-brands fa-facebook-f fa-fw" ></i></a></li>
        <li ClassName="list-inline-item"><a href="https://www.instagram.com/camilladahlstromz/"><i class="fa-brands fa-instagram fa-fw" ></i></a></li>
    </ul>
    </div>
    <div className="footer-links">
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/terms">Terms of Service</a>

    <div ClassName="footer-copyright"> &copy; {new Date().getFullYear()} Art by Anuya. All rights reserved.</div>
</div> 
</footer>
     );
    };
export default Footer;
