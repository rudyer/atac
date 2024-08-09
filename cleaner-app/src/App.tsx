
import { Container } from 'react-bootstrap';
import './App.css';
import ModalCreate from './ui/components/modal/modal_create_user';

import Example from './ui/components/modal/modal_create_user';
import { UserList } from './ui/components/user-list/user_list';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import HomeTemplate from './ui/template/home_template';
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={HomeTemplate} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
