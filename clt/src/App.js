import { useState } from 'react'
import {BrowserRouter,Switch,Route, NavLink, Router} from 'react-router-dom'
import {TabBar} from 'antd-mobile'
import { AppstoreOutline,PlayOutline,EnvironmentOutline,EyeOutline,UserCircleOutline } from 'antd-mobile-icons'
import './App.css'
import './assets/css/home.css'
import './assets/css/detail.css'
import './assets/css/videos.css'
import './assets/css/my.css'
import './assets/css/find.css'
import './assets/css/car.css'
import './assets/css/read.css'
import Home from './views/home';
import Detail from './views/detail';
import Localdetail from './views/localdetail';
import Videos from './views/videos'
import Location from './views/location'
import Find from './views/find'
import My from './views/my'
import Login from './views/login'
import Reg from './views/reg'
import Cardetail from './views/cardetail'


function App() {
  const [activeKey, setActiveKey] = useState('home')
  return (
    
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Detail" exact component={Detail}/>
            <Route path="/Videos" exact component={Videos}/>
            <Route path="/Location" exact component={Location}/>
            <Route path="/Localdetail" exact component={Localdetail}/>
            <Route path="/Find" exact component={Find}/>
            <Route path="/My" exact component={My}/>
            <Route path="/Login" exact component={Login}/>
            <Route path="/Reg" exact component={Reg}/>
            <Route path="/Cardetail" exact component={Cardetail}/>
          </Switch>
          <div className="abottom">
            <NavLink to="/"  className={'ab_style'}>
              <TabBar  activeKey={activeKey} onChange={setActiveKey}>
                <TabBar.Item key={'home'} title={'资讯'} icon={ <AppstoreOutline fontSize={20}/>}/>
              </TabBar>
            </NavLink >    
            <NavLink to="/Videos" className={'ab_style'}>
              <TabBar activeKey={activeKey} onChange={setActiveKey}>
                <TabBar.Item key={'videos'} title={'视频'} icon={ <PlayOutline fontSize={20}/>} />
              </TabBar>
            </NavLink>    
            <NavLink to="/Location" className={'ab_style'}>
              <TabBar activeKey={activeKey} onChange={setActiveKey}>
                <TabBar.Item key={'location'} title={'广州'} icon={ <EnvironmentOutline fontSize={20} />} />
              </TabBar>
            </NavLink>    
            <NavLink to="/Find" className={'ab_style'}>
              <TabBar activeKey={activeKey} onChange={setActiveKey}>
                <TabBar.Item key={'find'} title={'发现'} icon={ <EyeOutline fontSize={20}/>} />
              </TabBar>
            </NavLink>    
            <NavLink to="/My" className={'ab_style'}>
              <TabBar activeKey={activeKey} onChange={setActiveKey}>
                <TabBar.Item key={'my'} title={'我的'} icon={ <UserCircleOutline fontSize={20}/>}/>
              </TabBar>
            </NavLink>    
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;


