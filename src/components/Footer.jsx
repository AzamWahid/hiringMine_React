import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-light pt-4">
    <div className="container text-center">
      <p>HiringMine connects employers and job seekers...</p>
      <div className="mb-3">
        <a href="mailto:..." className="text-light me-3"><i className="fas fa-envelope"></i></a>
        <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-light me-3"><i className="fab fa-whatsapp"></i></a>
        <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-light"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <hr />
      <p className="small mb-0">
        <a href="#" className="link-light me-2">Privacy Policy</a>|
        <a href="#" className="link-light ms-2">Terms & Conditions</a>
      </p>
      <p className="small mb-0">&copy; {new Date().getFullYear()} HiringMine. All Rights Reserved.</p>
    </div>
  </footer>
);
export default Footer;
