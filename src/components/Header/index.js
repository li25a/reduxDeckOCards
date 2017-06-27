import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.scss';


export class Header extends Component {
    render() {
        return (
            <nav className={`navbar navbar-inverse navbar-fixed-top`}>
                <div className="container">
                    <div className="navbar-header">
                        <h5 className="navbar-brand">Deck O Cards</h5>
                    </div>
                    <div className="collapse navbar-collapse">
                    </div>
                </div>
            </nav>
        );
    }
}
