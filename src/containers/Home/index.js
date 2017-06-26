import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import Counter from 'components/Counter';
import Deck from 'components/Deck';


import * as CounterActions from 'actions/counter';
import * as DeckActions from 'actions/deck';


const metaData = {
    title: 'About'
};

@connect(
    state => ({
        counter: state.counter,
        deck: state.deckSet
    }),
    //dispatch => bindActionCreators(CounterActions, dispatch)
    //  dispatch => bindActionCreators(DeckActions, dispatch)
    dispatch => bindActionCreators(_.assign({}, CounterActions, DeckActions), dispatch)
)

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DocumentMeta {...metaData} />
                <Counter {...this.props} />
                <Deck {...this.props} />
            </div>
        );
    }
}
