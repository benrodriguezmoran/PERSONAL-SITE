import { useQuery } from '@apollo/client';
import GalleryList from '../components/GalleryList.jsx'
import {QUERY_GALLERY} from '../utils/queries';
import { Container } from "react-bootstrap"
const Gallery = () => {
    const { loading, data } = useQuery(QUERY_GALLERY)
    const images = data?.images || [];
    return (
      <>
        <h1 className='justify-text-left position-relative border-bottom'>gallery</h1>
        <Container className="justify-content-lg-center row row-cols-5">
          
          <GalleryList className="w-max-50" images={images} />
        </Container>
      </>
      );
    };
export default Gallery 
    