import React from 'react'
import {useState} from "react"
import { Footer } from "../footer/Footer"

import { Sidebar } from "../sidebar/Sidebar";
import { Navbar } from "../navbar/Navbar";

export const MasterComponent = ({children}) => {



      const [sidebar, setsidebar] = useState(false);

      const togglestate = () => {
        setsidebar(!sidebar);
      };

  return (

    <>
      <Sidebar sidebar={sidebar} togglestate={togglestate} />
      <div className={sidebar ? "App__child" : "App__child child__width"}>
        <Navbar state={togglestate} />
        {children}
        <Footer />
      </div>
    </>
  );
}
