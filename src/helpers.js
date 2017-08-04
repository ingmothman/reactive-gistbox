import React from 'react';
import ReactLoading from 'react-loading';

String.prototype.upperCaseFirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};


export const reactLoading = () => {
    return <ReactLoading delay={0}
                         className="box-center sub-loader"
                         type={'bubbles'}
                         color={'#45aeea'}
                         height={100}
                         width={100}/>;
};