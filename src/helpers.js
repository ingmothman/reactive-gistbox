import React from 'react';
import ReactLoading from 'react-loading';

String.prototype.upperCaseFirst = function () { // eslint-disable-line no-extend-native
    return this.charAt(0).toUpperCase() + this.slice(1);
};


export const reactLoading = (isSmall = false, type = 'bubbles') => {
    if (isSmall === true) {
        return <ReactLoading delay={0}
                             className="sub-loader"
                             type={type}
                             color={'#333333'}
                             height={14}
                             width={14}/>
    }
    return <ReactLoading delay={0}
                         className="box-center sub-loader"
                         type={type}
                         color={'#45aeea'}
                         height={100}
                         width={100}/>;
};