import React from 'react'
import { Route, Switch } from 'react-router'
import Navbar from '../components/Navbar'
// import { KeplerMap } from '../KeplerMap'
import KeplerMap from '../KeplerMap'

const routes = (	
	<>
		<Navbar width={ window.innerWidth + 'px' }  />
    <Switch>
      <Route exact path="/" component={KeplerMap} />
    </Switch>  
	</>
)

export default routes

// const routes = (	
// 	<>
// 		<Navbar width={ window.innerWidth + 'px' }  />
//     <Switch>
//     	<Route exact path="/">
//         <KeplerMap width={ window.innerWidth } height={ window.innerHeight } />
//       </Route> 
//       <Route exact path="/Chart">
//         <ChartSpot />
//       </Route>   
//     </Switch>  
// 	</>
// )
