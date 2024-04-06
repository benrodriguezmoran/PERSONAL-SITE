import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"
const Blog = ({blogs = []}) => {
    if (!blogs.length) {
        return <>no data</>
    }
return (
    <>
        {blogs && blogs.map((blog) => (
        <div className="col">
        <Card key={blog._id} className="text-light bg-transparent border border-white border-1 rounded-3 m-2 wrap">
            <Card.Body>
            <Card.Title className="fs-3">    
                <Link to={`/blog/${blog._id}`} key={blog._id}>{blog.title}</Link>
            </Card.Title>
            
            
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        </div>))}
    </>
    );
} 
export default Blog 