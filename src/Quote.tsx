import * as React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import QuoteList from './QuoteList';
import * as App from './App';
export default function Quote(props) {
  function handleRemove() {}
  var id = props.id;
  return (
    <div id="quote">
      <p>
        {props.quote} <br />
        <b>{props.author}</b>
      </p>
    </div>
  );
}
