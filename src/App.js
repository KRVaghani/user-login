import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
       <Router>
        <Container>
        <Header/>
          <Main>
          
            <Switch>
              <Route path="/registration">
                  <SignUp/>
              </Route>
              <Route path="/">
                <Login/>
              </Route>
            </Switch>
        </Main>
        </Container>
      </Router>
      
    </div>
  );
}

export default App;
const Container = styled.div`
  width:100%;
  height:100vh;
  display:grid;
  grid-template-rows: 50px auto;
  
`
const Main =styled.div`
 
  display:grid;
  grid-template-columns: auto;
`
