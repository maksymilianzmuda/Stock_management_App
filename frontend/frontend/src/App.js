import logo from './logo.svg';
import "react-toastify/dist/ReactToasify.css";
import './App.css';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToasContainer></ToasContainer>
    
    
    </>
  );
}

export default App;
