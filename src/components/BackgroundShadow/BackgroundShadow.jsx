import React from 'react';
import './BackgroundShadow.scss'

class BackgroundShadow extends React.Component {


    render() {
        const hideShadow=this.props.hideShadowHandler;
        return (
            <div className="background-shadow" onClick={() => {
                hideShadow();
            }}/>
        );
    }
}

export default BackgroundShadow;
