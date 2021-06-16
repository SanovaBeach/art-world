import React from 'react'

const Info = ({imgStart, start, topline, heading, image, alt, bgColor, subtitle}) => {
  


  return (
    <React.Fragment>
      <div className="Info" style={{backgroundColor: bgColor}}>
        <div className="Info__container container">
          <div className={`Info__container--row ${imgStart ? 'img-reverse': 'imgrow'} ` }>
            <div className="Info__container--column">
              <div className={`Info__container--pics ${start ? 'start': 'end'} `}>
                <img src={image} alt={alt} className='Info__container--img' />
              </div>
            </div>
            <div className="Info__container--column">
              <div className="Info__container-text">
                <p className="Info__container--topline">
                  {topline}
                </p>
                <h1 className="Info__container--heading">
                  {heading}
                </h1>
                {subtitle && 
                <p className="Info__container--sub">
                  {subtitle}
                </p>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Info