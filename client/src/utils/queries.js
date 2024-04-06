import { gql } from '@apollo/client';
export const QUERY_BLOG = gql`
    query getBlog($blogId: ID!) {
        blog(blogId: $blogId){
            _id
            title
            content
            tidbit
            date
        }
    }`
export const QUERY_ALL_BLOGS = gql`
    query getAllBlogs {
        blogs {
            _id
            title
            tidbit
            date
        }
    }`
export const QUERY_GALLERY = gql`
    query image {
        images {
            _id
            title
            path
        }
    }`