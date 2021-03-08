import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import DocumentTitle from "react-document-title";
import Home from "./Hostel/Home";
function App() {
  useEffect(() => {
    document.title = "Trace a Hostel Near You - Hostel Tracer";
  }, [DocumentTitle]);
  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
