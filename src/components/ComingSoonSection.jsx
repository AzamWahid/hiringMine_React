import React from 'react';
import img1 from '/assets/sixth_Img_1.png';
import img2 from '/assets/sixth_Img_2.png';

const ComingSoonSection = () => {
  return (
    <div className="sixth-sec">
      <div className="sixth-sec-start">
        <div className="sixth-sec-body">
          <img src={img1} alt="Connect" />
          <h3>Connect With People <span>Who Can Help</span></h3>
          <div className="sixth-btn">
            <button>Coming Soon</button>
          </div>
        </div>
        <div className="sixth-between">
          <div className="sixth-between-line"></div>
        </div>
        <div className="sixth-sec-body">
          <img src={img2} alt="Post Job" />
          <h3><span>Post Your Job </span>For People To See</h3>
          <div className="sixth-btn">
            <button>Coming Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
