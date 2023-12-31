import * as React from 'react';
import './style.css';
import Quote from './Quote';
import Input from './Input';
import QuoteList from './QuoteList';
import { v4 } from 'uuid';

export default function App() {
  const quoteRef = React.useRef(null);
  const authorRef = React.useRef(null);
  const [quotes, setQuotes] = React.useState([]);

  function clearList() {
    setQuotes([]);
  }

  const addQuote = () => {
    const quote = quoteRef.current.value;
    const author = authorRef.current.value;
    if (quote != '' && author != '') {
      setQuotes((prevQuotes) => {
        return [
          ...prevQuotes,
          <Quote id={v4()} quote={quote} author={'-' + author} />,
        ];
      });
    
      quoteRef.current.value = null;
      authorRef.current.value = null;
    }
    else{
      alert('The Quote or Author Feild is empty')
    }
  };

  return (
    <div id="body" className="container">
      <div className="mb-5 mt-5">
        <div className=" mr-5 row">
          <label>Quote</label>
          <input type="text" className="" name="quote" ref={quoteRef} />
        </div>
        <div className="row mt-3">
          <label>Author</label>
          <input type="text" name="author" ref={authorRef} />
          <div className="buttons mt-2">
            <button className=" btn btn-primary " onClick={addQuote}>
              Add Quote
            </button>
            <button className="btn btn-danger" onClick={clearList}>
              {' '}
              Clear List
            </button>
          </div>
        </div>
      </div>
      <QuoteList quotes={quotes} />
    </div>
  );
}
