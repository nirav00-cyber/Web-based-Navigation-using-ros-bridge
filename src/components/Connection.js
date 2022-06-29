import React, {useState, useEffect} from "react";
import ROSLIB from "roslib";
import { Alert } from "react-bootstrap";

function Connection() {
  
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() =>
    {
       const EstablishConnection = () =>{
        let ros = new ROSLIB.Ros();
           console.log(ros);
           console.log(ros.on);
           ros.on("connection", () =>
           {
               console.log("Connection Established"); 
               setIsConnected(true);
           })

           ros.on("close", () =>
           {
               console.log("Connection Closed");
               setIsConnected(false);
           })

           ros.on("error", () =>
           {
               console.log("error occured");
               setIsConnected(false);
           })
           try
           {
           ros.connect("ws://10.2.0.15:9090");
           } catch (err) {
               console.log("connection Error");
           }
        }
        
        EstablishConnection();
    },[])
    
    return (
        <>
            <Alert className="text-center m-3" variant={isConnected ? "success" : "danger"}>
                {isConnected ? "Robot Connected" : "Robot Disconnected"}    
            </Alert>
        </>
    );
}
export default Connection;