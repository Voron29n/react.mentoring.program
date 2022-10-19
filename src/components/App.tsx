import React from 'react';
import testJson from '$json/data.json';
import { lowerCase, upperCase } from '$utils/helper.ts';

interface IAppProps {
  style: string;
}

const App = ({ style }: IAppProps) => {
  return (
    <div style={style}>
      <h1>Hello, Welcome to React and TypeScript</h1>
      <h1>{testJson.testValue}</h1>
      <h1>{upperCase(testJson.testValue)}</h1>
      <h1>{lowerCase(testJson.testValue)}</h1>
    </div>
  );
};
export default App;
