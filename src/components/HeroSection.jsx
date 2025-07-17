import React from 'react';
import searchIcon from '/assets/search-vector.svg';
import heroImage from '/assets/first-sec-img.png';

const HeroSection = () => {
  return (
    <div className="first-sec">
      <div className="first-sec-center">
        <div className="first-sec-h1">
          <h1>Dig. Apply <br /> Prepare Your Future</h1>
          <p>Hiring Mine connects employer and job seekers...</p>
        </div>
        <div className="searchbox">
          <input type="text" id="search-input" placeholder="Search by Role or Keyword" />
          <img src={searchIcon} alt="Search Icon" />
        </div>
        <div className="findjobbtn">
          <button>Find Jobs</button>
        </div>
        <div className="popular-keywords">
          <h6>Popular Searches</h6>
          <div className="keywordbtns">
            {['Software', 'Developer', 'Backend', 'React', 'Node', 'Flutter', 'UI/UX', 'SEO', 'Writer'].map((word, index) => (
              <button key={index} className="btn-keyword">{word}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="first-sec-bgimage">
        <img src={heroImage} alt="Hero Section" />
      </div>
    </div>
  );
};

export default HeroSection;
