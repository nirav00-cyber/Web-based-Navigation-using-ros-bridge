import React, {Component, useState, useEffect} from "react";
import ROSLIB from "roslib";
import { Alert } from "react-bootstrap";
import Config from "./Config";

function Connection() {
    
    const [isConnected, setIsConnected] = useState(false);


    const [isROS, setIsROS] = useState(null);
    useEffect(() =>
    {
        const init_connection = () =>
        {
            const ros = new ROSLIB.Ros();
            console.log(ros);
            ros.on("connection", () =>
            {
                console.log("connection Established");
                setIsConnected(true);
            })
            ros.on("close", () =>
            {
                console.log("connection is closed!");
                setIsConnected(false);
                //try to reconnect every 3 seconds
                setTimeout(() =>
            {
                 try
                {
                     ros.connect("ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT);
                     setIsConnected(true);
                 } catch (err)
                 {
                     setIsConnected(false);
                    console.log("error while connecting");
                }
            }, 3000);

            })
            try
            {
                ros.connect("ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT);
                setIsConnected(true);
            } catch (err)
            {
                setIsConnected(false);
                console.log("error while connecting");
            }
        }
        init_connection();

    },[isROS]);

    return (
        <>
            <Alert className="text-center m-3" variant={isConnected ? "success" : "danger"}>
                {isConnected ? "Robot Connected" : "Robot Disconnected"}    
            </Alert>
        </>
    );
}
export default Connection;