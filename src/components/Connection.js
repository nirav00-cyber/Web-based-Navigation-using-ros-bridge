import React, {Component, useState, useEffect} from "react";
import ROSLIB from "roslib";
import { Alert } from "react-bootstrap";

function Connection() {
    
    const [isConnected, setIsConnected] = useState(false);


    const [isROS, setIsROS] = useState(null);
    useEffect((
        function init_connection() {
            const ros = new ROSLIB.Ros();
            setIsROS(ros);
            console.log("Connection Established");
        }
    ),[]);

    return (
        <>
            <Alert className="text-center m-3" variant={isConnected ? "success" : "danger"}>
                {isConnected ? "Robot Connected" : "Robot Disconnected"}    
            </Alert>
        </>
    );
}
export default Connection;