import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';


const metaData = {
  title: 'Deck O Cards',
  description: '',
  canonical: '',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags'
    }
  }
};

export class Home extends Component {
  handleShuffle() {
    console.log('shuffled');
  }
  handleDeal() {
    console.log('dealt');
  }
  render() {
    return (
      <div>
        <DocumentMeta {...metaData} />
        <div className="container">
          <div className="jumbotron">
            <h2>Home Page</h2>
            <button type="button" className="btn btn-primary" onClick={this.handleShuffle} >
              Shuffle Deck
            </button>
            <br />
            <button type="button" className="btn btn-primary" onClick={this.handleDeal} >
              Deal
            </button>
          </div>
        </div>
      </div>
    );
  }
}
