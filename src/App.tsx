import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Counter } from './components/Counter';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { User } from './components/context/User';
import { User1 } from './components/User1';



function App() {
  const fullName = {
    first: 'mohammad',
    second: 'naama'
  }
  const personList = [
    {
      first: 'mohammad',
      second: 'naama'
    },
    {
      first: 'mohammad',
      second: 'naama'
    },
    {
      first: 'mohammad',
      second: 'naama'
    },
  ]
    
  return (
    <div className="App">
      <User1 name='mohammad' number={10} isLogin={true} />
      <Person name={fullName}/>
      <PersonList names={personList} />
      <Status state="loading"/>
      <Heading>text</Heading>
      <Oscar>
        <Heading>hello</Heading>
      </Oscar>
      <Input value='' handleInput={(event)=>{ console.log(event)}} />
      <Button handleClick={(event,id)=>{
        console.log("mouse clicked",event,id)
      }} />
      <Container styles={{border: '1px solid black', padding: '1rem'}}/>
      <Counter/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    
    </div>
  );
}

export default App;
