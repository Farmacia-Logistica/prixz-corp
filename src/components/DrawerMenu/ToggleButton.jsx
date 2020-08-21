import React from 'react';
import './ToggleButton.scss'

class ToggleButton extends React.Component {


    render() {
        return (
            <button onClick={this.props.onClick} className="drawer-toggle-button">
                ☰
            </button>
        );
    }
}

export default ToggleButton;
