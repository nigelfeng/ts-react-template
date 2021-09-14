import "./styles/global.scss";
import "tailwindcss/tailwind.css";

import { test } from "@service";
import React from "react";
import ReactDOM from "react-dom";

test(3);

ReactDOM.render(<div />, document.querySelector("#app"));
