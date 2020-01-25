import React from 'react';
import MainTemplate from './components/mainTemplate';

// const App: React.FC = () => {
function App () {
  return (
    <MainTemplate form={<div>Form</div>}> 
      <div>
        Children
      </div>
    </MainTemplate>
  );
}

export default App;
