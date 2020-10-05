import React, { useEffect, useState } from "react";
import "./header.css";

function PendingNotification(pending) {
  return (
    <div className="pendingnotification">{pending.pending.senderName}</div>
  );
}

export default PendingNotification;
