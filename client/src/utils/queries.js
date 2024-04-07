import { gql } from '@apollo/client';
export const QUERY_BLOG = gql`
    query getBlog($path: String!) {
        blog(path: $path){
            _id
            title
            content
            tidbit
            date
            path
            path
        }
    }`
export const QUERY_ALL_BLOGS = gql`
    query getAllBlogs {
        blogs {
            _id
            title
            tidbit
            date
            path
            path
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