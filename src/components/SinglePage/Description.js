import React from 'react'

const Description = ({singleData}) => {
  return (
    <React.Fragment>
      <div className="SingleData__infos">
          <h2 className="SingleData__infos--identification">
            Description
          </h2>
          <div className="SingleData__info">
            <p className="SingleData__info--title">
              Description
            </p>
            <p className="SingleData__info--desc">
              {singleData.description}
            </p>
            <p className="SingleData__info--title">
              Commentary
            </p>
            <p className="SingleData__info--desc">
              {singleData.commentary}
            </p>
          </div>
        </div>
        <hr className='hline'  />
    </React.Fragment>
  )
}

export default Description