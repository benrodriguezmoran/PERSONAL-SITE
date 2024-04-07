import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import App from './App.jsx';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Support from './pages/Support.jsx'
import Contact from './pages/Contact.jsx'
import Gallery from './pages/Gallery.jsx'
import '../scss/custom.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },{
                path:'about',
                element: <About />
            },{
                path:'blog',
                element: <Blog />
            },{ 
                path:'/blog/:path',
                element: <BlogPost/>
            },            
            {
                path:'portfolio',
                element: <Portfolio />
            },{
                path:'support',
                element: <Support />
            },{
                path:'contact',
                element: <Contact />
            },{
                path:'gallery',
                element: <Gallery />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);