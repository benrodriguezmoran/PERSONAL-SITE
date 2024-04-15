import GalleryList from '../components/GalleryList.jsx'
import { Container, Row, Col, Card, Ratio } from "react-bootstrap"
import { Link } from "react-router-dom"
import Markdown from 'react-markdown'
import useBreakpoint from 'bootstrap-5-breakpoint-react-hook';
import { about1, about2, about3 } from './content/homeContent.js'
import rehypeRaw from 'rehype-raw'
import { useQuery } from '@apollo/client';
import {QUERY_PROJECT, QUERY_GALLERY} from '../utils/queries'

export default function Home() {
  const projectData = useQuery(QUERY_PROJECT, {
        variables: { path : "spacegame" },
      });
  const siteData = useQuery(QUERY_PROJECT, {
        variables: { path : "site" },
      });    
  const galleryData = useQuery(QUERY_GALLERY);
  var project = projectData.data?.project;
  var site = siteData.data?.project;
  const images = galleryData.data?.images || [];
  const loading = galleryData.loading || projectData.loading || siteData.loading;


  const breakpoints = ['xs','sm','md']
  var slice;
  var currentBr = useBreakpoint();
  
  if (loading){
    return (<>Loading</>);
  }
  if (breakpoints.includes(currentBr)){
    slice = 3;
  }else{slice = 6;}
  return (
      <>
      <h1 className='justify-text-left position-relative border-bottom p-0 py-2 m-1 fw-bold'><span className='text-primary'>&gt;</span>ben_rodriguez</h1><strong className='px-2'>fullstack web dev // game dev</strong> 
      <Container>
        <Row className='row-cols-lg-2 row-cols-1 pb-3 my-3 border-bottom' >
        <Col className='text-light p-lg-3 p-lg-1 p-3 py-3 lh-lg d-flex align-items-center' >
          <div>
            <Markdown rehypePlugins={[rehypeRaw]}>
              {about1()}
            </Markdown>
             in my <Link className='col p-0 link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/gallery">
              gallery
              </Link>.
          </div>
        </Col>
        <Container className="col p-0 row row-cols-lg-3 row-cols-3 m-0 my-2">
            <GalleryList className="" images={images} slice={slice} />
        </Container>
        </Row>
        <Row className='row-cols-lg-2 row-cols-1 py-3 my-3 border-bottom d-flex' >
          <Col className='text-light lh-lg d-flex order-lg-1  align-items-center'>
            <div>
              <Markdown rehypePlugins={[rehypeRaw]}>
                {about2()}
              </Markdown>
              Explore my projects at my <Link className='col p-0 link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/portfolio">portfolio</Link>.
            </div> 

          </Col>
          <Link className='col p-1 pb-3 order-lg-0 py-3' style={{textDecoration: "none"}} to={`/portfolio/spacegame`}>
              <Card className=" text-light bg-tertiary bg-gradient border-white border-1 rounded-3 m-0 p-0 wrap shadow" >
                <Ratio aspectRatio={1/2}>
                  <Card.Img variant="top" className="m-0 p-0" style={{ 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center', 
                    backgroundImage: `url(${project.image})`}} />
                </Ratio>
                <Card.Body className="p-0 m-0" >
                  <Container className="p-3" >
                    <Card.Title className="text-primary fs-3 border-bottom border-1">    
                          <strong>{project.title}</strong>
                    </Card.Title>

                    <Card.Text>{project.tidbit}</Card.Text>
                  </Container>
                </Card.Body>
              </Card>
          </Link>
        </Row>
        <Row className='p-0 row-cols-lg-2 row-cols-1 py-3 my-3 border-bottom d-flex align-items-center' > 
          <Col className='text-light lh-lg'>
            <div>
            <Markdown rehypePlugins={[rehypeRaw]}>
              {about3()}
            </Markdown>
            </div>
          </Col>
          <Link className='col p-1 pb-3 order-lg-0 py-3' style={{textDecoration: "none"}} to={`/portfolio/spacegame`}>
              <Card className=" text-light bg-tertiary bg-gradient border-white border-1 rounded-3 m-0 p-0 wrap shadow" >
                <Ratio aspectRatio={1/2}>
                  <Card.Img variant="top" className="m-0 p-0" style={{ 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center', 
                    backgroundImage: `url(${site.image})`}} />
                </Ratio>
                <Card.Body className="p-0 m-0" >
                  <Container className="p-3" >
                    <Card.Title className="text-primary fs-3 border-bottom border-1">    
                          <strong>{site.title}</strong>
                    </Card.Title>

                    <Card.Text>{site.tidbit}</Card.Text>
                  </Container>
                </Card.Body>
              </Card>
          </Link>
        </Row>
        <Row className='p-0 row-cols-lg-2 row-cols-1 py-3 my-3 border-bottom d-flex align-items-center' >
          <Col className='p-1 py-3' >
            <Ratio className="rounded-3 shadow-lg " style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: 'url(/images/certificate.png)'}} 
                aspectRatio={1/1.7}>
              <></>
            </Ratio>
          </Col>
        </Row>
      </Container>
      </>
      );
    };

    