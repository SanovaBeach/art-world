import React from 'react'

const Subjects = ({singleData}) => {
  return (
    <React.Fragment>
      <div className="SingleData__infos">
          <h2 className="SingleData__infos--identification">
            Subjects and Context
          </h2>
          <div className="SingleData__info">
            <p className="SingleData__info--title">
              Dimensions
            </p>
            <p className="SingleData__info--desc">
              {singleData.dimensions}
            </p>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Subjects