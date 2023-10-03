import React from "react";
import './host.scss'

const Host = ({ host }) => {
  const isHostSplit = host.name.split(" ");
  const [name, lastname] = isHostSplit;

  return (
    <div className="host">
      <div className="host-name">
        <p className="host-firstname">{name.trim()}</p>
        <p className="host-lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="host-photo" />
    </div>
  );
};

export default Host;
