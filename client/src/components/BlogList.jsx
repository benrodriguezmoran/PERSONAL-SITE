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
                <Link to={`/blog/${blog.path}`} key={blog._id}>{blog.title}</Link> 
            </Card.Title>
            <h6 className="border-bottom border-1"><strong>
            {blog.date.split('at')[0]}
            </strong></h6>
            <Card.Text>{blog.tidbit}</Card.Text>
            </Card.Body>
        </Card>
        </div>))}
    </>
    );
} 
export default Blog 