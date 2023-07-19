import React,{useEffect, useState} from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  
} from "reactstrap";



const Feeds = () => {
  const [Register, setUserData] = useState('');
  const Registers  = async () => {
    try {
      const response = await fetch("/signup", {
        method: "GET",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials:"include"
        
      });
      const data = await response.json();
      
      setUserData(data);
      console.log(data);
      
    } catch (err) {
      console.log(err);
      
    }
  }
  useEffect (()=> {
    Registers();
  }, []);
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Registrations</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
         Today
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {Register && Register?.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href=""
              tag="a"
              className="d-flex align-items-center p-3 border-0">
              
              {feed.name}
              <small className="ms-auto text-muted text-small">
                {feed.email}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;






