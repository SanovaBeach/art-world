import React from 'react'
import learn from '../../assets/LearnPageImg/teaching.jpg'

const LearnHeader = () => {
  return (
    <React.Fragment>
      <div className="LearnHeader">
        <div className="LearnHeader__container container">
        <div className="LearnHeader__head">
          <img src={learn} alt="Group of people in a rounded table" className="LearnHeader__image" />
        </div>
        <h1 className="LearnHeader__heading">
          Teaching & Research
        </h1>
        </div>
        <hr className="hline" />
        <p className="LearnHeader__desc">
          As an academic art institution, research and education are key to la Galerie d'Or. Through art, the museums create powerful opportunities for the production, presentation, and interpretation of original scholarship. By offering unparalleled access to our collections and resources, the museums foster new approaches to the study and appreciation of art.
        </p>
      </div>
    </React.Fragment>
  )
}

export default LearnHeader