import { useQuery } from '@apollo/client';
import GalleryList from '../components/GalleryList.jsx'
import {QUERY_GALLERY} from '../utils/queries';
import { Container, Ratio } from "react-bootstrap"
const Gallery = () => {
    const { loading, data } = useQuery(QUERY_GALLERY)
    const images = data?.images || [];
    const rows = [];
    console.log(loading)
    for (let i = 0; i < 25; i++) {
      rows.push(<div key={i} >
      <Ratio className="image shadow-lg p-1 m-0 bg-secondary rounded-3 placeholder-wave" aspectRatio="1x1">
      <></>
      </Ratio>
      </div>);
  }
    if (loading) {
      return (<> <h1 className='justify-text-left position-relative border-bottom py-2 m-1 fw-bold'><span className='text-primary'>&gt;</span>gallery</h1>
        <Container className="justify-content-lg-left row row-cols-lg-4 row-cols-2 p-0 m-0">
              {rows}
          </Container></>
      )};
    return (
      <>
        <h1 className='justify-text-left position-relative border-bottom py-2 m-1 fw-bold'><span className='text-primary'>&gt;</span>gallery</h1>
        <Container className="justify-content-lg-left row row-cols-lg-4 row-cols-2 p-0 m-0 ">
          
          <GalleryList className="" images={images} loading={loading} />
        </Container>
      </>
      );
    };
export default Gallery 
    