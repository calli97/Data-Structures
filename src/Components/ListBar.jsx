import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

function ListBar () {
    const style={
        background:"linear-gradient(to right,#04D5AF, #1964AF)"
    }

  return (
    <div className="d-flex justify-content-between p-3 bg-light rounded-top" style={style}>
      <InputGroup className="mb-2" style={{width:"500px"}}>
        <FormControl placeholder="Data" aria-label="Data" />
          <Button variant="outline-success" className="btn-dark text-white">Push</Button>
          <Button variant="outline-success" className="btn-dark text-white">Pop</Button>
          <Button variant="outline-success" className="btn-dark text-white">Unshift</Button>
          <Button variant="outline-success" className="btn-dark text-white">Shift</Button>
      </InputGroup>
      <div>
        <Button variant="outline-danger" className="btn-danger text-white">Delete</Button>
      </div>
    </div>
  );
};

export default ListBar;
