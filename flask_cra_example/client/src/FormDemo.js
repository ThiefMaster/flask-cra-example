import React, {useState} from 'react';
import flask from 'flask-urls.macro';
import './FormDemo.css';

const greetingURL = flask`api.greeting`;

export default function FormDemo() {
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleNameChange = e => setName(e.target.value.replace(/\//g, '').trim());

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    const resp = await fetch(greetingURL({name}));
    const data = await resp.json();
    setResult(data.greeting);
    setLoading(false);
  };

  return (
    <>
      <form className="FormDemo-fields" onSubmit={handleSubmit}>
        <input
          placeholder="Enter a name"
          size="50"
          autoComplete="off"
          onChange={handleNameChange}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>Submit</button>
      </form>
      <p>
        The URL we will call is <code>{greetingURL({name})}</code>.<br />
        {result === null
          ? <>The API has never been called.</>
          : <>The last call's result is <code>{result || 'n/a'}</code>.</>
        }
      </p>
    </>
  );
}
