import React from 'react';

const Provenance = ({singleData}) => {
  return (
    <React.Fragment>
      <div className="SingleData__infos">
        <h2 className="SingleData__infos--identification">Provenance</h2>
        <div className="SingleData__info">
          <p className="SingleData__info--desc">{singleData.provenance}</p>
        </div>
      </div>

      <hr className='hline' />
    </React.Fragment>
  );
};

export default Provenance;
