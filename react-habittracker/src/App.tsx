import React from 'react';
import MainTemplate from './components/MainTemplate';
import Form from './components/Form';
// import HabitList from './components/HabitList';
import CreatingHabbit from './components/CreatingHabbit';

// const App: React.FC = () => {
function App () {
  return (
    <MainTemplate form={<Form />}> 
      {/* <HabitList/> */}
    <CreatingHabbit/>      
    </MainTemplate>
  );
}

export default App;
