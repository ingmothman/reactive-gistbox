import React from 'react';
import { reactLoading } from './../helpers';

export default (props) => {
  const { list, isPreloading } = props;
  const loaders = list.map((item) => {
    return (<li key={item.id} className={`animated ${(item.finishedPreloading === true ? 'fadeOutLeft' : '')}`}>
      {reactLoading(true)} {item.text}
    </li>);
  });

  return (
    <div
      id="page-preloader"
      className={`animated ${(isPreloading === true ? '' : 'fadeOutDownBig')}`}
    >
      {reactLoading(false)}
      <ul className="page-loaders-list list-unstyled">
        {loaders}
      </ul>
    </div>
  );
};
