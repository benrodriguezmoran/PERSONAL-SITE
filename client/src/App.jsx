import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.net.min'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(VANTA.NET({
        el: vantaRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x444444,
        backgroundColor: 0x0,
        maxDistance: 14.00,
        spacing: 15,
        points:10
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Container as='main' className="bg-secondary bg-opacity-75 font-monospace  shadow justify-content-center text-light p-2">
        <Outlet />
      </Container>
      <Footer />
      <div ref={vantaRef} className='z-n1 position-fixed top-50 start-50 translate-middle w-100 h-100 p-0 m-0'></div>
      </ApolloProvider>
    
  );
}

export default App;
