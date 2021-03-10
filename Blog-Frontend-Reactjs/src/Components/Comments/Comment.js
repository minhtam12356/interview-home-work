import React from 'react';
import { Button, CardBody, Card } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Comment = ({name, avatar, comment, daycomment}) => {
  return (
    <React.Fragment>
        <Card>
          <CardBody>
            <div className="d-flex">
              <img src={avatar}/>
              <div className="group-comment">
                <div className="d-flex">
                  <h6 className="name-comment">{name}</h6>
                  <p className="day-comment">{daycomment}</p>
                </div>
                {comment}
                <Button className="button-reply">Reply to</Button>
              </div>
            </div>
          </CardBody>
        </Card>
    </React.Fragment>
  );
}

export default Comment;