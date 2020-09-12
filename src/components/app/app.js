import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Table from '../table/table';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          Three13
        </Navbar.Brand>
      </Navbar>
      <Table />
    </div>
  );
}

export default App;
