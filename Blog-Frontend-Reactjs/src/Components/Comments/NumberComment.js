import React, { Children, useState } from 'react';
import { Collapse, Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const NumberComment = ({number, children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
      <Button className="reply" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{number} replies</Button>
      <Collapse isOpen={isOpen}>
          {children}
      </Collapse>
    </React.Fragment>
  );
}

export default NumberComment;