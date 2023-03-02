import React from "react";
import { createRoot } from "react-dom/client";
import Appwithstore from "./component/App";
import App from "./component/App";
const webapplication=document.querySelector('#root');
const root=createRoot(webapplication);
root.render( <Appwithstore />  );