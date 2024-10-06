import Link from "next/link";
import React from "react";

const ArchivedNotification = () => {
  return (
    <div>
      <h2>Archived Notifications</h2>
      <Link href="/complex-dashboard">Notification</Link>
    </div>
  );
};

export default ArchivedNotification;


// This is a regular route not a slot so it can be accessed using "/complex-dashboard/archived". Now the prop "notifications" in layout.tsx file either show component of this page.tsx or then one in @notifications folder. 

// Here in case of unmatched routes, when navigating within the UI, next.JS retains the previously active state of a slot regardless of changes in the URL. that is when navigating from "/complex-dashboard/" to "/complex-dashboard/archived" only @notification handled this URL case so it will show new UI but rest of 2 slots does not but sill they will show the UI they were showing before. 

// In case of page-reload or directly visiting the "/complex-dashboard/archived" , next.JS immediately searches for a default.tsx file within each unmatched slot. The presence of this file is critical as it provides the default content that next.JS will render in the user interface. if this default.tsx is missing then next.JS will render a 404 error. 

// The default.tsx file in next.JS serve as a fallback to render content when the framework cannot retrive a slot's active state from the current URL.

// We have freedom to define the UI for unmatched routes, We can either mirrir the content found in page.tsx or craft an entirely custom view. The default.tsx must be in same directory as page.tsx file