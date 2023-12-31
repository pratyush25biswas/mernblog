import Navbar from './Navbar';
import Bloglist from './Bloglist';
import Createlist from './Createlist';
import Createuser from './Createuser';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          
          <Route path="/create" exact component={Createlist} />
          <Route path="/createuser" exact component={Createuser} />
          <Route path="/" exact component={Bloglist} />

          
             
        </div>
      </div>
    </Router>
  );
}

export default App;