/* eslint-disable array-callback-return */
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

import React,{useEffect, useState} from "react";



 

const ProjectTables = () => {
  const [userData, setUserData] = useState('');
  const Orders  = async () => {
    try {
      const res = await fetch("/Order", {
        method: "GET",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials:"include"
        
      });
      const data = await res.json();
      
      setUserData(data);
      console.log(data);
      
    } catch (err) {
      console.log(err);
      
    }
  }
  useEffect (()=> {
    Orders();
  }, []);
 
  return (
    <>
    
      <Card>
        <CardBody>
          <CardTitle tag="h5">Orders</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            To be Delivered Today 
          </CardSubtitle>
          

          <Table method="GET" className="no-wrap mt-3 align-middle">
          
            <thead>
            
              <tr>
              
                <th>Name</th>
                <th>PhNumber</th>
                <th>ChooseTime</th>
                <th>DeliveryAddress</th>
                <th>OrderDetails</th>
                <th>OrderPrice</th>
              </tr>
            </thead>
        
            {userData && userData?.map((item) => {
              return(<tr className="border-top">
                <td>
                  <div className="d-flex align-items-center p-2">
                  <i class="zmdi zmdi-account-circle"></i>
                    <div className="ms-3">
                      <td>{item.Name}</td>

                    </div>
                  </div>
                </td>
                <td>{item.PhNumber}</td>
                <td>{item.ChooseTime}</td>

                <td>{item.DeliveryAddress}</td>
                <td>{item.OrderDetails}</td>
                <td>{item.OrderPrice}</td>
              </tr>)
            })}
             
          </Table>
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectTables;
