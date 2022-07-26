import "./Sidebar.css"
import { HiX } from "react-icons/hi"
import { RiInstagramFill, RiTwitterFill, RiFacebookFill } from "react-icons/ri"
import {Link} from "react-router-dom"


import React from 'react'

export const Sidebar = ({ sidebar, togglestate }) => {
   return (
     <div
       className={
         sidebar
           ? "navbar__sidebar sidebar__visible"
           : "navbar__sidebar sidebar__hidden"
       }
     >
       <HiX className="sidebar__symbol" onClick={() => togglestate(false)} />

       <div className="sidebar__child">
         <div>
           <a href="">NEWS</a>
           <div>
             <a href="">U.S. NEWS</a>
             <Link to="/news/buisness">Buisness</Link>
             <Link to="/news/health">Health</Link>
             <Link to="/news/justice">Social Justice</Link>
             <Link to="/news/global">World News</Link>
             <Link to="/news/environment">Environment</Link>
             <Link to="/news/coronavirus">Coronavirus</Link>
           </div>
         </div>

         <div>
           <a href="">POLITICS</a>
           <div>
             <Link to="/news/biden">Joe Biden</Link>
          <Link to="/news/extremisim">Extremism</Link>
          <Link to="/news/congress">Congress</Link>
        </div>
         </div>

         <div>
           <a href="">OPINION</a>
         </div>

         <div>
           <Link to="/news/entertainment">ENTERTAINMENT</Link>
           <div>
             <a href="">Culture & Arts</a>
             <a href="">Media</a>
             <a href="">Celibrity</a>
             <a href="">TV & Film</a>
           </div>
         </div>

         <div>
           <Link to="/news/trending">LIFE</Link>
           <div>
             <Link to="/news/beauty">Style & Beauty</Link>
             <Link to="/news/">Parenting</Link>
             <Link to="/news/travel">Travel</Link>
             <Link to="/news/health">Wellness</Link>
             <Link to="/news/relationships">Relationships</Link>
             <Link to="/news/money">Money</Link>
             <Link to="/news/living">Home & Living</Link>
             <Link to="/news/work">Work/Life</Link>
             <Link to="/news/shopping">Shopping</Link>
           </div>
         </div>

         <div>
           <Link to="/news/">COMMUNITIES</Link>

           <div>
             <a href="">Queer Voices</a>
             <a href="">Black Voices</a>
             <a href="">Asian Voices</a>
             <a href="">Latino Voices</a>
             <a href="">Women</a>
           </div>
         </div>

         <div>
           <a href="">SPECIAL PROJECTS</a>

           <div>
             <a href="">Highline</a>
           </div>
         </div>

         <div>
           <a href="">HUFFPOST PERSONAL</a>
         </div>

         <div>
           <a href="">VIDEO</a>
         </div>

         <div>
           <a href="">HOROSCOPES</a>
         </div>

         <div>
           <a href="">FROM OUR PARTNERS</a>
           <div>
             <a href="">New Money Mindset</a>
           </div>
         </div>

         <div>
           <a href="">NEWSLETTERS</a>
         </div>

         <div>
           <a href="">INTERNATIONAL</a>
           <div>
             <a href="">Australia</a>
             <a href="">Canada</a>
             <a href="">Brazil</a>
             <a href="">France</a>
             <a href="">India</a>
             <a href="">U.S.</a>
             <a href="">U.K.</a>
             <a href="">Korea</a>
             <a href="">Greece</a>
             <a href="">Italia</a>
           </div>
         </div>

         <div id="sidebar_lastdiv">
           <h3> Follow Us</h3>

           <div>
             <RiFacebookFill />
             <RiTwitterFill />
             <RiInstagramFill />
           </div>
         </div>
       </div>
     </div>
   );
}
