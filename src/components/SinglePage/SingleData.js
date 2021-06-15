import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleData } from '../../redux/collectionSlice';

import Loading from '../Loading/Loading';
import Identification from './Identification';
import PhysicalDesc from './PhysicalDesc';
import Provenance from './Provenance';
import Acquisitions from './Acquisitions';
import Description from './Description';
import Exhibition from './Exhibition';
import Subjects from './Subjects';

const SingleData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleData, singleLoading } = useSelector(
    (state) => state.collections
  );

  useEffect(() => {
    dispatch(getSingleData(id));
  }, [dispatch, id]);

  console.log(singleData);

  if (singleLoading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <div className="SingleData container">
          <img
            src={singleData.primaryimageurl}
            alt={singleData.title}
            className="SingleData__img"
          />
          <p className="SingleData__copy">
            Photo &copy;{' '}
            {singleData.images !== undefined
              ? singleData?.images[0]?.copyright
              : 'Harvard'}
          </p>
          <hr style={{ width: '80rem', marginTop: '4rem', color: '#eee' }} />

          {singleData && <Identification singleData={singleData} />}
          {singleData && <PhysicalDesc singleData={singleData} />}
          {singleData.provenance && <Provenance singleData={singleData} />}
          {singleData.creditline && <Acquisitions singleData={singleData} />}
          {singleData.description && <Description singleData={singleData} />}
          {singleData.exhibitions && <Exhibition singleData={singleData} />}
          {singleData.dimensions && <Subjects singleData={singleData} />}
      </div>
    </React.Fragment>
  );
};

export default SingleData;
