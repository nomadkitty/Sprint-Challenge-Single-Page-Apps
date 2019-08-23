import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {

return (
    <div>
  <div className="ui attached tabular menu">
    <NavLink exact to="/" className="active item">
      <i aria-hidden="true" className="home icon"></i>
      Home Page
    </NavLink>
    <NavLink to="/character" className="active item">
      <i aria-hidden="true" className="users icon"></i>
      Characters
    </NavLink>
    <NavLink to="/location" className="active item">
      <i aria-hidden="true" className="map outline icon"></i>
      Locations
    </NavLink>
    <NavLink to="/episode" className="active item">
      <i aria-hidden="true" className="video icon"></i>
      Episodes
    </NavLink>
  </div>
  {/* <div class="ui bottom attached segment active tab"></div> */}
</div>
)
};

// const panes = [
//   {
//     menuItem: { key: 'home', icon: 'home', content: 'Home Page' },
//     render: () => <NavLink exact to="/" />
//   },
//   {
//     menuItem: { key: 'Characters', icon: 'users', content: 'Characters' },
//     render: () => <NavLink to="/characters" />
//   },
//   {
//     menuItem: { key: 'locations', icon: 'map outline', content: 'Locations' },
//     render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
//   },
//   {
//     menuItem: { key: 'episodes', icon: 'video', content: 'Episodes' },
//     render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
//   }
// ]

// const TabNav = () => <Tab panes={panes} />

// export default TabNav;