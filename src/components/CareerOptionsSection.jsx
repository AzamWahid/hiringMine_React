import React from 'react';

const CareerOptionsSection = () => {
  return (
    <div className="second-sec fourth-sec">
      <div className="second-sec_head_P fourth-sec-head" style={{ width: '85%' }}>
        <h3><span> Countless Career Options</span> Are Waiting For You To Explore</h3>
      </div>
      <div className="maisecbox">
        <div className="second-sec_boxes">
          {Array(8).fill().map((_, index) => (
            <div className="box box4" key={index}>
              <div className="iconbox">
                <i className="fa-solid fa-briefcase fa-xl"></i>
              </div>
              <h1>Get a Job</h1>
              <p>Join our vibrant community. Create your account and unlock boundless opportunities.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerOptionsSection;
