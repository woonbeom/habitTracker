import React from 'react';
import MainTemplate from './components/MainTemplate';
import Form from './components/Form';
import HabitList from './components/HabitList';

// const App: React.FC = () => {
function App () {
  return (
    <MainTemplate form={<Form />}> 
      <HabitList/>
    </MainTemplate>
  );
}

export default App;
