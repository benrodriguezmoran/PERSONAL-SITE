import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import App from './App.jsx';
import Home from './pages/Home';
import Error from './pages/Error';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Project from './pages/Project.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Support from './pages/Support.jsx';
import Gallery from './pages/Gallery.jsx';
import Bio from './pages/Bio.jsx';
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
                path:'blog',
                element: <Blog />
            },{ 
                path:'/blog/:path',
                element: <BlogPost/>
            },{ 
                path:'/portfolio/:path',
                element: <Project/>
            },{
                path:'portfolio',
                element: <Portfolio />
            },{
                path:'support',
                element: <Support />
            },{
                path:'gallery',
                element: <Gallery />
            },{
                path:'bio',
                element: <Bio />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);