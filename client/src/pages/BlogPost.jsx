import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import {QUERY_BLOG} from '../utils/queries'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const {path} = useParams();
    const { loading, data } = useQuery(QUERY_BLOG, {
        variables: { path : path },
      });
    const blog = data?.blog || [];
    return (
        <>
            <h1 className="justify-text-left border-bottom p-2 m-1">{blog.title}</h1>
                <Markdown className="text-light p-2 m-1" rehypePlugins={[rehypeRaw]}>{blog.content}</Markdown>
            
        </>
)};
export default BlogPost