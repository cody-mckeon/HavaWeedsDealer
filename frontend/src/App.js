import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import ServiceScreen from './screens/ServiceScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Hava Weeds Dealer</Link>
        </header>
        <main>
          <Routes>
            <Route path="/service/:slug" element={<ServiceScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
