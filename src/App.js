import './App.css';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import UserDetails from './components/UserDetails';


function App() {
  return (
    <div className="App">
      <UserList />
      <CreateUser />
      <UserDetails />
    </div>
  );
}

export default App;
