import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import ToggleFunc from './component/ToggleFunc';
import RoutingCheck from './component/RoutingCheck';
import UserList from './component/UserList';
import DataFetch from './component/DataFetch';
import Hooks from './component/Hooks';
import ContextAPI from './component/ContextAPI';

const Home = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const CodeSnippet = ({ code }) => (
    <pre><code>{code}</code></pre>
  );

  return (
    <div className="home-container">
      <h1>Welcome to the My React-Very-Nice Webpage</h1>
      <marquee>I am Divvyanshu Garg | Student | Developer</marquee>
      <p>Current time: {time.toLocaleTimeString()}</p>

      <section className="interactive-section">
        <h2> Demo</h2>

        <p>Click count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </section>

    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/routingcheck" element={<RoutingCheck />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/togglefunc" element={<ToggleFunc />} />
            <Route path="/datafetch" element={<DataFetch />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/contextapi" element={<ContextAPI />} />
          </Routes>
        </main>
        <footer>
          PIET Summer Internship 2024 
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;