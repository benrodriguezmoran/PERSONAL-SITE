import useBreakpoint from 'bootstrap-5-breakpoint-react-hook';
import { Card, Container, Ratio } from "react-bootstrap";
import { Link } from "react-router-dom"
var ratio = 7;
const Portfolio = ({projects = []}) => {
    const breakpointsSm = ['sm'];
    const breakpointsLg = ['lg','xl','xxl'];
    var currentBr = useBreakpoint();
    if (!projects.length) {
        return <>no data</>
    }
    
    if (breakpointsLg.includes(currentBr) == true){
        ratio = 8;
    }
    else if (breakpointsSm.includes(currentBr) == true){
        ratio = 9;
    }
    else if (currentBr == 'md'){
        ratio = 10;
    }
    else {ratio = 10;}

return (
    <>
        {projects && projects.map((project) => (
        <Link className='col p-2' style={{textDecoration: "none"}} key={project._id} to={`/portfolio/${project.path}`}>
        <Ratio aspectRatio={ratio/11}className="p-0 m-0" >
        <Card className="text-light bg-secondary bg-opacity-75 border-white border-1 rounded-3 m-0 p-0 wrap shadow" >
            <Ratio aspectRatio={1/2}>
            <Card.Img variant="top" className="m-0 p-0" style={{ 
                backgroundSize: 'cover',
                backgroundPosition: 'center', 
                backgroundImage: `url(${project.image})`}} />
            </Ratio>
            <Card.Body className="p-0 m-0" >
            <Container className="p-3" >
            <Card.Title className="text-primary fs-3 border-bottom border-1">    
                <strong>{project.title} </strong>
            </Card.Title>

            <Card.Text>{project.tidbit}</Card.Text>
            </Container>
            </Card.Body>
        </Card>
        </Ratio>
        </Link>
        ))}
    </>
    );
} 
export default Portfolio 