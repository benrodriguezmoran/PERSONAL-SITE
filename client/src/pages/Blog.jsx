import { useQuery } from '@apollo/client';
import BlogList from '../components/BlogList'
import {QUERY_ALL_BLOGS} from '../utils/queries';

const Blog = () => {
    const { loading, data } = useQuery(QUERY_ALL_BLOGS)
    const blogs = data?.blogs || [];
    return (
      <>
      <h1 className='justify-text-left border-bottom py-2 m-1 fw-bold'><span className='text-primary'>&gt;</span>blog</h1>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 p-1 g-2'>
          <BlogList blogs={blogs}/>
        </div>
        
      </>
      );
    };
export default Blog 