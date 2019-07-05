import React, {useEffect, useState} from 'react';
import flask from 'flask-urls.macro';

const timeURL = flask`api.time`;


const fetchTime = async () => {
  const resp = await fetch(timeURL());
  const data = await resp.json();
  return data.now;
};

export default function TimeDemo() {
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setTime(await fetchTime());
      setLoading(false);
    })();
  }, []);

  const handleClick = async () => {
    setLoading(true);
    setTime(await fetchTime());
    setLoading(false);
  };

  return time && (
    <>
      <p>
        The server time returned by the API is <code>{time}</code>.
      </p>
      <button onClick={handleClick} disabled={loading}>Update</button>
    </>
  );
}
