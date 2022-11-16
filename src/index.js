import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Notification from "./Notification";
import {
  notification1,
  notification2,
  notification3,
  notification4,
  notification5,
  notification6,
  notification7,
} from "./data";
import avatar1 from "./images/avatar-mark-webber.webp";
import avatar2 from "./images/avatar-angela-gray.webp";
import avatar3 from "./images/avatar-jacob-thompson.webp";
import avatar4 from "./images/avatar-rizky-hasanuddin.webp";
import avatar5 from "./images/avatar-kimberly-smith.webp";
import avatar6 from "./images/avatar-nathan-peterson.webp";
import avatar7 from "./images/avatar-anna-kim.webp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="w-96 mx-auto px-3">
      <Header />
      <Notification number={notification1} image={avatar1} />
      <Notification number={notification2} image={avatar2} />
      <Notification number={notification3} image={avatar3} />
      <Notification number={notification4} image={avatar4} />
      <Notification number={notification5} image={avatar5} />
      <Notification number={notification6} image={avatar6} />
      <Notification number={notification7} image={avatar7} />
    </div>
  </React.StrictMode>
);
