import * as React from 'react';
import './style.css';
import Quote from './Quote';
import 'bootstrap/dist/css/bootstrap.css';
export default function Input() {
  const [q, setQ] = React.useState();
  const [a, setA] = React.useState();
  const quoteRef = React.useRef(null);
  const authorRef = React.useRef(null);
  const handleClick = () => {
    setQ(quoteRef.current.value);
    setA('-' + authorRef.current.value);
  };
  return (
    <div>
      <label>Quote</label>
      <input type="text" name="quote" ref={quoteRef} />
      <br />
      <label>Author</label>
      <input type="text" name="author" ref={authorRef} />
      <button className="btn-primary" onClick={handleClick}>
        {' '}
        press
      </button>
      <Quote quote={q} author={a} />
    </div>
  );
}
