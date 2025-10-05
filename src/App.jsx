import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './Body';
import Login from './Login';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import RequireAuth from './RequireAuth';
import PublicOnly from './PublicOnly';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route element={<PublicOnly />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
