import React, {Component} from 'react';
import PropTypes from 'prop-types';

function activeItemComponent(ActiveItemComponent) {
    return class extends Component {
        static propTypes = {
            itemChanged: PropTypes.func.isRequired,
            activeItem: PropTypes.object,
        };

        render() {
            return <ActiveItemComponent
                itemChanged={this.props.itemChanged}
                activeItem={this.props.activeItem}
                {...this.props} />
        }
    }
}

export default activeItemComponent;