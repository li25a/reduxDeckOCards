import React, { Component } from 'react';
import './styles/app.scss';
import { Header } from 'components/Header';

export class App extends Component {
    static propTypes = {
        children: React.PropTypes.any,
    };

    render() {
        return (
            <div>
                <Header />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}
