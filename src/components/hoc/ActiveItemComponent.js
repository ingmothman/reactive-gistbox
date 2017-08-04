import React, {Component} from 'react';
import PropTypes from 'prop-types';

function activeItemComponent(ActiveItemComponent) {
    return class extends Component {
        static propTypes = {
            itemChanged: PropTypes.func.isRequired,
            activeItemId: PropTypes.number.isRequired,
        };

        render() {
            return <ActiveItemComponent
                itemChanged={this.props.itemChanged}
                activeItemId={this.props.activeItemId}
                {...this.props} />
        }
    }
}

export default activeItemComponent;