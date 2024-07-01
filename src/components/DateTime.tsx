"use client";

import React, { useState, useEffect } from "react";

const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p className="m-0"> Time : {date.toLocaleTimeString()}</p>
      <p className="m-0"> Date : {date.toLocaleDateString()}</p>
    </div>
  );
};

export default DateTime;
