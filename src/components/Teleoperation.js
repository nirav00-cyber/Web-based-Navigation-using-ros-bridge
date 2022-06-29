// import React, { useState, useEffect } from 'react'
// import Config from './Config';
// import { Joystick } from "react-joystick-component";
// import ROSLIB from 'roslib';

// function Teleoperation()
// {
//     const [isConnected, setIsConnected] = useState(false);

//     const [isROS, setIsROS] = useState(null);
//     useEffect(() =>
//     {
//         const init_connection = () =>
//         {
//             const ros = new ROSLIB.Ros();
//             console.log(ros);
//             ros.on("connection", () =>
//             {
//                 console.log("connection Established");
//                 setIsConnected(true);
//             })
//             ros.on("close", () =>
//             {
//                 console.log("connection is closed!");
//                 setIsConnected(false);
//                 //try to reconnect every 3 seconds
//                 setTimeout(() =>
//             {
//                  try
//                 {
//                 ros.connect("ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT);
//                  } catch (err)
//                 {
//                     console.log("error while connecting");
//                 }
//             }, 3000);

//             })
//             try
//             {
//             ros.connect("ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT);
//             } catch (err)
//             {
//                 console.log("error while connecting");
//             }
//         }
//         init_connection();

//     },[isROS]);

//     const handleMove = () =>
//     {
//      //need to create ROS publisher on the topic /cmd_vel
//         const cmd_vel = new ROSLIB.Topic({
//             ros:isROS.current.value,
//             name: "/turtle1/cmd_vel",
//             messageType:"geometry_msgs/Twist"
//         });

//         const twist = new ROSLIB.Message({
//             linear: {
//                 x: 2,
//                 y: 0,
//                 z:0
//             },
//             angular: {
//                 x: 0,
//                 y: 0,
//                 z:0,
//             }
//         })
//         cmd_vel.publish(twist);
//         //need to create a twist message to be published on the rosbridge

//         //need to publish the message on the  /cmd_vel topic
//     }
//     const handleStop = () =>
//     {
        
//     }
//   return (
//     <div>
//           <Joystick
//               size={100}
//               baseColor="#EEEEEE"
//               stickColor="#BBBBBB"
//               move={handleMove}
//               stop={handleStop}  
//           >    
//         </Joystick>
//     </div>
//   )
// }

// export default Teleoperation;