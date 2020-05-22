import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
  return (
    <MyContext.Provider value="Hello World 123">
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  const value = useContext(MyContext);

  // Вместо этого теперь можно использовать
  // return (
  //   <MyContext.Consumer>
  //     {
  //       (value) => {
  //         return (
  //           <p>{value}</p>
  //         );
  //       }
  //     }
  //   </MyContext.Consumer>
  // );

  // ЭТО
  return <p>{value}</p>
}

ReactDOM.render(<App />, document.getElementById('root'));
