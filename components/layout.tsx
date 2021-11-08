//-----------------------------------------------------------------------------
// components/layout.tsx
//-----------------------------------------------------------------------------

import React from "react";

/**
 * Layout for the application.
 * 
 * @param   {React.ReactNode}
 * @returns 
 */
export default function Layout({ children } : {children: React.ReactNode}) {
  return <div>{children}</div>
}