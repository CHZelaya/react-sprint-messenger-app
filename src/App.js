import './App.css';
import ChatRoom from './components/chatroom/chatroom.component';
import Login from './components/login/login.component.jsx'


function App() {

  const user = true;

  return (
    <div className="App-container">
      <h2> Welcome to the Chatroom</h2>
      {
        user ?
          (
            <ChatRoom />
          ) : (
            <Login />
          )
      }


    </div>
  );
}

export default App;
