import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"
const Blog = ({blogs = []}) => {
    if (!blogs.length) {
        return <>no data</>
    }
return (
    <>
        {blogs && blogs.map((blog) => (
        <Card key={blog._id}  className="text-light bg-transparent border border-primary border-5 rounded-3 wrap p-5 m-3"><Link to={`/blog/${blog._id}`} key={blog._id}>{blog.title}</Link>
            
        </Card>))}
    </>
    );
} 
export default Blog 