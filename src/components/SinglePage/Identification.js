import React from 'react';

const Identification = ({ singleData }) => {
  return (
    <React.Fragment>
      <div className="SingleData__infos">
        <h2 className="SingleData__infos--identification">
          Identification and Creation
        </h2>
        <div className="SingleData__info">
          <p className="SingleData__info--title">Object Number</p>
          <p className="SingleData__info--desc">{singleData.objectnumber}</p>
          <p className="SingleData__info--title">People</p>
          <p className="SingleData__info--desc">
            {singleData?.people?.map((item) => {
              const {
                displayname,
                culture,
                birthplace,
                displaydate,
                deathplace,
                personid,
              } = item;
              return (
                <span className="SingleData__info--people" key={personid}>
                  <em style={{ textDecoration: 'underline' }}>{displayname}</em>
                  , {culture} ({birthplace}, {displaydate} {deathplace})
                </span>
              );
            })}
          </p>
          <p className="SingleData__info--title">Title</p>
          <p className="SingleData__info--desc">{singleData.title}</p>
          <p className="SingleData__info--title">Classification</p>
          <p className="SingleData__info--desc">{singleData.classification}</p>
          <p className="SingleData__info--title">Work Type</p>
          <p className="SingleData__info--desc">
            {singleData.worktypes !== undefined
              ? singleData?.worktypes[0]?.worktype
              : null}
          </p>
          <p className="SingleData__info--title">Date</p>
          <p className="SingleData__info--desc">{singleData.dated}</p>
          <p className="SingleData__info--title">Culture</p>
          <p className="SingleData__info--desc">{singleData.culture}</p>
        </div>
      </div>
      <hr className='hline' />
    </React.Fragment>
  );
};

export default Identification;
