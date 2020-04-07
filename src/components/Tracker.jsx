import React, { useEffect } from "react";
import Styles from "./Tracker.module.scss";

const Tracker = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <h2 className={Styles.subTitle}>
        Tracking Data Map of Countries Affected
      </h2>
    </div>
  );
};

export default Tracker;
