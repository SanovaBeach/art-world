import React from 'react';

const Exhibition = ({ singleData }) => {
  return (
    <React.Fragment>
      <div className="SingleData__infos">
        <h2 className="SingleData__infos--identification">
          Exhibition History
        </h2>
        <div className="SingleData__info">
          <p className="SingleData__info--title">Dimensions</p>
          <p className="SingleData__info--desc">{singleData.exhibitions[0].title}</p>
        </div>
      </div>
      <hr className="hline" />
    </React.Fragment>
  );
};

export default Exhibition;
