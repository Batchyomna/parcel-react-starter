import React from "react";
import ReactDOM from "react-dom";
import { App } from './App'

const MOUNT_NODE = document.getElementById("app");
MOUNT_NODE.allowRendererProcessReuse = false

ReactDOM.render(<App/>, MOUNT_NODE, () => { console.log('render is done')});
