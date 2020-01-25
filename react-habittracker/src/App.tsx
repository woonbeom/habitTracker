import React from 'react';
import MainTemplate from './components/MainTemplate';
import Form from './components/Form';

// const App: React.FC = () => {
function App () {
  return (
    <MainTemplate form={<Form />}> 
      <div>
        Children
      </div>
    </MainTemplate>
  );
}

export default App;
