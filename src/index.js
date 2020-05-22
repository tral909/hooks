import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  );
};

const HookSwitcher = () => {
  const [ color, setColor ] = useState('grey');
  const [ fontSize, setFontSize ] = useState(14);

  return (
    <div style={{ padding: '10px',
      backgroundColor: color,
      fontSize: `${fontSize}px`
     }}>
      Hello world
      <button
        onClick={() => setColor('grey')}>
        Dark
      </button>
      <button
        onClick={() => setColor('white')}>
        Light
      </button>
      <button
        onClick={() => setFontSize((s) => s - 2)}>
        Smaller
      </button>
      <button
        onClick={() => setFontSize((s) => s + 2)}>
        Larger
      </button>
    </div>
  );
};

class PersonClass extends Component {
  state = {
    firstName: 'Bob',
    lastName: 'Smith'
  }

  updateFirstName() {
    this.setState({ firstName: 'Mike'});
  }

}

const Person = () => {
  const [ person, setPerson ] = useState({
    firstName: 'Bob',
    lastName: 'Smith'
  });

  // в отличие от setState - lastName затрется!!
  setPerson({ firstName: 'Mike' });
  // Так заработает
  setPerson((person) => {
    return { ...person, firstName: 'Mike'};
  });

  // или разделить проперти по useState
  // const [ firstName, setFirstName ] = useState('Bob');
  // const [ lastName, setLastName ] = useState('Bob');

  // setFirstName('Mike');
}

ReactDOM.render(<App />, document.getElementById('root'));
