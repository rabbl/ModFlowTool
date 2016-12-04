import React from "react"

import {Link} from "react-router"

export default class MapOverlay extends React.Component {

    enableMap() {
        this.context.map._handlers.forEach(function (handler) {
            handler.enable();
        });
    }

    disableMap() {
        this.context.map._handlers.forEach(function (handler) {
            handler.disable();
        });
    }

    componentWillMount() {
        this.disableMap();
    }

    componentWillUnmount() {
        this.enableMap();
    }

    render() {
        return (
            <div>
                <div className="map-overlay-darkner"></div>
                <div className="map-overlay">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <Link to="/">
                                <span className="glyphicon glyphicon-remove"></span>
                            </Link>
                        </div>
                        <div className="panel-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

MapOverlay.contextTypes = {
    map: React.PropTypes.object
};