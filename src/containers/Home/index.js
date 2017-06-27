import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import Deck from 'components/Deck';
import * as DeckActions from 'actions/deck';


const metaData = {
    title: 'Deck O Cards'
};


@connect(
    state => ({
        deck: state.deck,
        dealt: state.dealt
    }),
     dispatch => bindActionCreators(DeckActions, dispatch)
)

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DocumentMeta {...metaData} />
                <Deck {...this.props} />
            </div>
        );
    }
}
