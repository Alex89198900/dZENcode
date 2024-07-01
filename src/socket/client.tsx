"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import useLocalStorage from "react-use-localstorage";
const socket = io();


export default function ClientSocket() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [sessions, setsessions] = useLocalStorage("name", "1");
  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }
    function onConnect() {
      setIsConnected(true);
      try {
        setTransport(socket.io.engine.transport.name);
        socket.io.engine.on("upgrade", (transport) => {
        });
        socket.on("chat message", (msg) => {
          setsessions(msg);
        });
      } catch (error) {
       
        console.log(error,"jjjjjj");
      }
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
      socket.on("chat message", (msg) => {
        setsessions(msg);
      });
    }
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    
    return () => {
      socket.off("disconnect", onDisconnect);
      socket.off("connect", onConnect);
    };
    
  }, [setsessions]);
  
  return (
    <div className="ml-1">
      <p className="m-0">Sessions:{sessions} </p>
    </div>
  );
}
