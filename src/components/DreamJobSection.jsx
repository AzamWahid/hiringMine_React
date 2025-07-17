import React from 'react';
import emoji1 from '/assets/emoji1.webp';

const DreamJobSection = () => {
  return (
    <div className="third-sec">
      <div className="third-sec-start">
        <div className="third-sec_head_P">
          <h3>Find Your Dream Job <span>Super Fast Ever.</span></h3>
          <p>We are here to help jobseekers connect with organizers and companies.</p>
        </div>
        <div className="maisecbox">
          <div className="third-sec_boxes">
            <img src={emoji1} alt="Happy Worker Emoji" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJobSection;
