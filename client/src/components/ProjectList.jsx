import useBreakpoint from 'bootstrap-5-breakpoint-react-hook';
import { Card, Container, Ratio } from "react-bootstrap";
import { Link } from "react-router-dom"
var ratio = 7;
const Portfolio = ({projects = []}) => {
    const breakpointsSm = ['xs','sm','md'];
    const breakpointsLg = ['xl','xxl'];
    var currentBr = useBreakpoint();
    if (!projects.length) {
        return <>no data</>
    }
    
    if (breakpointsLg.includes(currentBr) == true){
        ratio = 8;
    }
    else if (breakpointsSm.includes(currentBr) == true){
        ratio = 10;
    }
    else {ratio = 9;}

return (
    <>
        {projects && projects.map((project) => (
        <div className="col" key={project._id} >
        <Link style={{textDecoration: "none"}} to={`/portfolio/${project.path}`}>
        <Ratio aspectRatio={ratio/11}className="p-0 m-0" >
        <Card className="overflow-scroll text-light bg-tertiary bg-gradient border-white border-1 rounded-3 m-0 p-0 wrap shadow" >
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
        </div>))}
    </>
    );
} 
export default Portfolio 