import React from 'react'

const PhysicalDesc = ({singleData}) => {
  return (
    <React.Fragment>
      <div className="SingleData__infos">
          <h2 className="SingleData__infos--identification">
            Physical Description
          </h2>

          <div className="SingleData__info">
            <p className="SingleData__info--title">
              Medium
            </p>
            <p className="SingleData__info--desc">
              {singleData.medium}
            </p>
            <p className="SingleData__info--title">
              Technique
            </p>
            <p className="SingleData__info--desc">
              {singleData.technique}
            </p>
            <p className="SingleData__info--title">
              Dimensions
            </p>
            <p className="SingleData__info--desc">
              {singleData.dimensions}
            </p>
            <p className="SingleData__info--title">
              Inscriptions and Marks
            </p>
            <p className="SingleData__info--desc">
              {singleData.marks !==undefined ? (singleData?.marks?.map((mark, index) => (
                <span key={index}>{mark.text}</span>
              ))) : null}
            </p>
          </div>
        </div>
        <hr className='hline' />
        
    </React.Fragment>
  )
}

export default PhysicalDesc