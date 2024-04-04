import Container from "react-bootstrap/esm/Container";

const Blog = ({blogs = []}) => {
    if (!blogs.length) {
        return <Container as="main">no data</Container>
    }
return (
    <Container as='main' className="main text-light">
        {blogs && blogs.map((blog) => (<h1 key={blog._id}>{blog.title}</h1>))}
    </Container>
    );
} 
export default Blog 