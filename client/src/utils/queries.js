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
export const QUERY_PROJECT = gql`
    query getProject($path: String!) {
        project(path: $path){
            _id
            title
            content
            tidbit
            date
            path
            image
        }
    }`
export const QUERY_ALL_PROJECTS = gql`
    query getAllProjects {
        projects {
            _id
            title
            tidbit
            date
            path
            image
        }
    }`