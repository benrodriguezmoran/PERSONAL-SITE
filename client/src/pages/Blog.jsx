import { useQuery } from '@apollo/client';
import BlogList from '../components/BlogList'
import {QUERY_ALL_BLOGS} from '../utils/queries';
import { Container } from 'react-bootstrap'
const Blog = () => {
    const { loading, data } = useQuery(QUERY_ALL_BLOGS)
    const blogs = data?.blogs || [];
    return (
      <>
      <h1 className='justify-text-left border-bottom p-2 m-1'>blog</h1>
        <div className='row row-cols-3 row-cols-lg-4 p-4 g-4'>
          <BlogList blogs={blogs}/>
        </div>
        
      </>
      );
    };
export default Blog 