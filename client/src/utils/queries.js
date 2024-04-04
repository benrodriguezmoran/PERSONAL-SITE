import { gql } from '@apollo/client';
export const QUERY_BLOG = gql`
    query getBlog($blogId: ID!) {
        blog(blogId: $blogId){
            _id
            title
        }
    }`
export const QUERY_ALL_BLOGS = gql`
    query getAllBlogs {
        blogs {
            _id
            title
        }
    }`