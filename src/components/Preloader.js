import React, {Component} from 'react';
import {reactLoading} from './../helpers';
import {Transition, TransitionGroup} from 'react-transition-group' // ES6

class Preloader extends Component {

    render() {
        const {list, isPreloading} = this.props;
        const loaders = list.map((item) => {
            return <Transition key={item.id} in={true} timeout={1000}>
                <li className={'animated ' + (item.finishedPreloading === true ? 'fadeOutLeft' : '')}>
                    {reactLoading(true)} {item.text}
                </li>
            </Transition>;
        });

        return (
            <Transition in={isPreloading} timeout={1000} unmountOnExit={true}>
                <div id="page-preloader" className={'animated ' + (isPreloading === true ? '' : 'fadeOutUpBig')}>
                    {reactLoading(false)}
                    <ul className="page-loaders-list list-unstyled">
                        <TransitionGroup>
                            {loaders}
                        </TransitionGroup>
                    </ul>
                </div>
            </Transition>
        );
    }

}

export default Preloader;