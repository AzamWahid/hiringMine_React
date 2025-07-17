import React from 'react';

const steps = [
  { icon: 'fa-id-badge', title: 'Create an Account' },
  { icon: 'fa-magnifying-glass', title: 'Search a Job' },
  { icon: 'fa-file-arrow-up', title: 'Upload CV/Resume' },
  { icon: 'fa-briefcase', title: 'Get a Job' },
];

const StepsSection = () => {
  return (
    <div className="second-sec">
      <div className="second-sec_head_P">
        <h3>Get Hired In 4 <span> Quick Easy Steps (Coming Soon)</span></h3>
        <p>The quickest and most effective way to get hired by the top firm.</p>
      </div>
      <div className="maisecbox">
        <div className="second-sec_boxes">
          {steps.map((step, index) => (
            <div key={index} className={`box box${index + 1}`}>
              <div className="iconbox">
                <i className={`fa-solid ${step.icon} fa-xl`}></i>
              </div>
              <h1>{step.title}</h1>
              <p>Join our vibrant community. Create your account and unlock boundless opportunities.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
