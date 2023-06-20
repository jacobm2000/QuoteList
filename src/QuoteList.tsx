import * as React from 'react';
import './style.css';
import Quote from './Quote';
import Input from './Input';

export default function QuoteList({ quotes }) {
  return <div>{quotes}</div>;
}
