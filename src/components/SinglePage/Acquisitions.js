import React from 'react'

const Acquisitions = ({singleData}) => {
  return (
    <React.Fragment>
      <div className="SingleData__infos">
          <h2 className="SingleData__infos--identification">
            Acquisition and Rights
          </h2>
          <div className="SingleData__info">
            <p className="SingleData__info--title">
              Credit Line
            </p>
            <p className="SingleData__info--desc">
              {singleData.creditline}
            </p>
            <p className="SingleData__info--title">
              Accession Year
            </p>
            <p className="SingleData__info--desc">
              {singleData.accessionyear}
            </p>
            <p className="SingleData__info--title">
              Object Number
            </p>
            <p className="SingleData__info--desc">
              {singleData.objectnumber}
            </p>
            <p className="SingleData__info--title">
              Division
            </p>
            <p className="SingleData__info--desc">
              {singleData.division}
            </p>


          </div>
        </div>
        <hr className='hline' />

    </React.Fragment>
  )
}

export default Acquisitions