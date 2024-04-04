import { useRouteError } from 'react-router-dom';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Container from 'react-bootstrap/esm/Container';
export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="text-light" id="error-page">
      <Nav />
      <Container className='min-vh-100 '>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </Container>
      <Footer />
    </main>
  );
}
