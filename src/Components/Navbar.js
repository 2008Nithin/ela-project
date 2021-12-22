import React from 'react';

export default function Navbar(props) {
  let setTheScreen = props.setTheScreen;
  return (
    <div className='navbar'>
      <h1>Among the Hidden |</h1>
      <p>By: Margaret Peterson Haddix</p>
      <hr />
      <div
        onClick={() => {
          setTheScreen(0);
        }}
        className='go-home'
      >
        {'<'}
        --- Go to Home
      </div>
    </div>
  );
}
