import { Card, Ratio } from "react-bootstrap";
import { Link } from "react-router-dom"
const Blog = ({blogs = []}) => {
    if (!blogs.length) {
        return <>no data</>
    }
return (
    <>
        {blogs && blogs.map((blog) => (
        
        <Link className="col p-2" key={blog._id} to={`/blog/${blog.path}`}>
        <Ratio aspectRatio={3 / 4}>
        <Card className="text-light bg-transparent  border border-white border-1 rounded-3 m-0 wrap shadow" >
            <Card.Body className="" >
            <Card.Title className="text-primary link-offset-1 fs-3">    
                <strong> {blog.title} </strong>
            </Card.Title>
            <h6 className=" border-bottom border-1"><strong>
            {blog.date.split('at')[0]}
            </strong></h6>
            <Card.Text>{blog.tidbit}</Card.Text>
            </Card.Body>
        </Card>
        </Ratio>
        </Link>
        ))}
    </>
    );
} 
export default Blog 