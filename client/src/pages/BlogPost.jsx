import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import {QUERY_BLOG} from '../utils/queries'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'

const BlogPost = () => {
    const {path} = useParams();
    const { loading, data } = useQuery(QUERY_BLOG, {
        variables: { path : path },
      });
    const blog = data?.blog || [];
    return (
        <>
            <h1 className='justify-text-left border-bottom py-2 m-1 fw-bold '><LinkContainer className='text-primary ' to="/blog"><a className='pe-auto link-primary link-underline-opacity-25 link-underline-opacity-100-hover'>&gt;blog</a></LinkContainer><br className='d-lg-none d-flex'></br>/{blog.title}</h1>
                <Markdown className="text-light p-2 m-1" rehypePlugins={[rehypeRaw]}>{blog.content}</Markdown>
            
        </>
)};
export default BlogPost