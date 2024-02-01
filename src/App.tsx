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
import { MuteableRef } from './components/ref/MuteableRef';
import { Private } from './components/Auth/Private';
import { Profile } from './components/Auth/Profile';
import { List } from './components/List/List';
import { RandomNumber } from './components/RandomNumber/RandomNumber';
import { TemplateLiter } from './components/template-liter/TemplateLiter';
import { CustomerButton } from './components/html/Button';
import { CustomerInput } from './components/html/Input';
import { Text } from './components/polymorrphics/Text';



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
      <MuteableRef/>
      <Private isLoggedIn={true} Component={Profile}/>
      <List items={['h','b','v']} onClicked={(item)=>{console.log(item)}} />
      <List items={[1,2,3,4]} onClicked={(item)=>{console.log(item)}} />
      <List items={[
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
      ]} onClicked={(item)=>{console.log(item)}} />
      <RandomNumber value={10} isPositive/>
      <TemplateLiter position='center' />
      <CustomerButton variants='primary' onClick={()=>console.log('clicked')}>
         my button
      </CustomerButton> 
        
       <Text as='h1' color='primary' size='lg'>hhhhhh</Text> 
       <Text as='p' color='secondary'>gggggg</Text>
       <Text as='label' size='md'>kkkkkk</Text>
    </div>
  );
}

export default App;
