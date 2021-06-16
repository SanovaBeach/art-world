import React, { useState, useEffect } from 'react';
import { getCollectionsAsync, fetchMore, fetchMoreWithQuery, filterDataAsync } from '../../redux/collectionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

import Loading from '../Loading/Loading';


const Contents = ({search}) => {
  const [size, setSize] = useState(0)
  const [page, setPage] = useState(1)

  const dispatch = useDispatch();
  const { collections, loading, info} = useSelector(
    (state) => state.collections
  );

  useEffect(() => {
    dispatch(getCollectionsAsync());
  }, [dispatch]);

  if(loading || info === undefined) {
    return <Loading />
  }


  async function getMoreData() {
    setSize(size+15)
    setPage(page + 1)
    dispatch(fetchMore(size, page))
    console.log('getMoreData')
  }

  async function getQueryData() {
    setSize(size + 15)
    setPage(page + 1)
    dispatch(fetchMoreWithQuery(search, size, page)) 
    console.log('search data')
  }

  return (
    <React.Fragment>
    <InfiniteScroll
      dataLength={collections?.length}
      next={search ? getQueryData :getMoreData}
      hasMore={true}
      loader={<Loading className='inline-loading' />}
    >
      <div className="Contents container">
        <p className="Contents__records">
          Showing {info !== undefined ? info?.totalrecords.toLocaleString() : 0} works
        </p>
        <motion.div className="Contents__main" layout>
          {collections.map((collection) => {
            const {
              id,
              primaryimageurl,
              title,
              classification,
              objectnumber,
              images
            } = collection;
            return (
              <div key={id} className="Contents__main--container">
              <Link to={`collections/object/${id}`}>
                <img
                  id={id}
                  className="Contents__main--img"
                  src={primaryimageurl || images ==='undefined' ? images[0].baseimageurl : ''}
                  alt={title}
                />
              </Link>
                <p className="Contents__main--object">{objectnumber}</p>
                <p className="Contents__main--title">{title}</p>
                <p className="Contents__main--class">{classification}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </InfiniteScroll>
    </React.Fragment>
  );
};

export default Contents;
