import { useQuery } from '@apollo/client';
import BlogList from '../components/BlogList'
import {QUERY_ALL_BLOGS} from '../utils/queries';
const Blog = () => {
    const { loading, data } = useQuery(QUERY_ALL_BLOGS)
    const blogs = data?.blogs || [];
    return (
        <BlogList blogs={blogs} className="main "/>
      );
    };
export default Blog