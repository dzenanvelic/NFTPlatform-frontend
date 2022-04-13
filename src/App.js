
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import TopNavigation from './shared/components/TopNavigation';
import Home from './pages/Home';
import Nft from './pages/Nft';
import Blogpage from './pages/Blogpage';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogHome from './pages/blogpages/BlogHome';
import WriteBlog from './pages/blogpages/WriteBlog';
import UserSettings from './pages/UserSettings';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleBlogPage from './pages/blogpages/SingleBlogPage';

function App() {
  const user = false
  return (<>

    <Router>
      <TopNavigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nft' element={<Nft />} />
        <Route path='/blogs' element={<Blogpage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/bloghome' element={<BlogHome />} />
        <Route path='/blogwrite' element={user ? <WriteBlog /> : <Register />} />
        <Route path='/usersettings' element={user ? <UserSettings /> : <Register />} />
        <Route path='/blogsign' element={user ? <Home /> : <Login />} />
        <Route path='/blogregister' element={user ? <Home /> : <Register />} />
        <Route path='/singleblog/:blogid' element={<SingleBlogPage />} />

      </Routes>

    </Router>
  </>);
}

export default App;
