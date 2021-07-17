import { Provider } from 'react-redux'
import store, { history }  from './store'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router' 
import routes from './routes'
import {lazy, Suspense} from 'react'
// import { KeplerMap } from './KeplerMap'
// import  KeplerMap  from './KeplerMap'
const KeplerMap = lazy(()=>import('./KeplerMap')) 
const Navbar = lazy(() => import('./components/Navbar'))
// import Navbar from './components/Navbar'
// console.log(KeplerMapImport)

const App = () => {
  // console.log('store', store)
  return (
	    <Provider store={store}>
		    <ConnectedRouter history={history}>
		    		<>
		    			<Suspense fallback = {<div>Loading...</div>}>
								<Navbar width={ window.innerWidth + 'px' }  />
							</Suspense>	
{/*							<OuterPortalComponent />*/}
					    <Switch>
					    	<Route exact path="/">
					    		<Suspense fallback = {<div>Loading...</div>}>
					        	<KeplerMap width={ window.innerWidth} height={ window.innerHeight - 60 } />
					        </Suspense>	
					    		}
					      </Route> 

					      <Route>
					      	<Suspense fallback = {<div>Loading...</div>}>
					        	<KeplerMap width={ window.innerWidth } height={ window.innerHeight - 60} />
					        </Suspense>	
					      	}
					      </Route>   
					    </Switch>  
						</>
		    </ConnectedRouter>  
	    </Provider>
  )
}

export default App
// <Navbar width={window.innerWidth + 'px'}  />