import React, { Component } from 'react';
import { Link } from 'react-router';
import { styles } from './styles.scss';


export class Header extends Component {
    render() {
        return (
            <nav className={`${styles} navbar navbar-inverse navbar-fixed-top`}>
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="">Deck O Cards</a>
                    </div>
                    <div className="collapse navbar-collapse">
                    </div>
                </div>
            </nav>
        );
    }
}
