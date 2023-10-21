import "./App.css";

import Sidebar from "./components/sidebar";
import Info from "./components/info";

function App() {
  return (
    <div className='center-item'>
      <div className='container d-flex'>
        <Sidebar />
        <Info />
      </div>
      <div className='attribution'>
        Challenge by{" "}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href='https://www.frontendmentor.io/profile/baron-gascon25'>
          Baron Gascon
        </a>
        .
      </div>
    </div>
  );
}

export default App;
