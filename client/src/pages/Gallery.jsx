import { useQuery } from '@apollo/client';
import GalleryList from '../components/GalleryList.jsx'
import {QUERY_GALLERY} from '../utils/queries';
import { Container } from "react-bootstrap"
const Gallery = () => {
    const { loading, data } = useQuery(QUERY_GALLERY)
    const images = data?.images || [];
    return (
      <>
        <h1 className='justify-text-left position-relative border-bottom p-2 m-1'>gallery</h1>
        <Container className="justify-content-lg-left row row-cols-lg-4 row-cols-2 p-0 m-0">
          
          <GalleryList className="" images={images} />
        </Container>
      </>
      );
    };
export default Gallery 
    