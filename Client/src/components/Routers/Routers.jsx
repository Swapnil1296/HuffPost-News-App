import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { PageNotFound } from "../PageNotFound/PageNotFound";

import {Login} from "../Login/Login"


import {MasterComponent} from "../MasterComponent/MasterComponent"
import { NewsDetailedPage } from "../NewsDetailedPage/NewsDetailedPage";
import { NewsBody } from "../NewsItem/NewsBody";
import { Life } from "../Life/Life";

export const Routers = () => {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={  <MasterComponent><Home/></MasterComponent>  }
        />
        <Route
          path="/life"
          element={<MasterComponent><Life/></MasterComponent>}
        />

        <Route
          path="/entry/:id"
          element={  <MasterComponent><NewsDetailedPage/></MasterComponent>  }
        />

        <Route
          path="/member"
          element={  <MasterComponent><ProfilePage/></MasterComponent>  }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/news/:section"

        element={ <MasterComponent><NewsBody/></MasterComponent>}/>

        <Route
          path="*"
          element={<MasterComponent><PageNotFound/></MasterComponent>}
        />

        
        
      </Routes>
    </>
  );
};
