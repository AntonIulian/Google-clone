import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SearchPage from "./components/SearchPage";





function App() {
  return (
    <div className="app">
      <Router>
        <Routes>


          <Route path="/search" element={<SearchPage></SearchPage>}>

          </Route>
   
          <Route path="/" element={<Home/>}>
</Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
