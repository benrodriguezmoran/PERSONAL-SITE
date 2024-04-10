import { useQuery } from '@apollo/client';
import ProjectList from '../components/ProjectList'
import {QUERY_ALL_PROJECTS} from '../utils/queries';
const Portfolio = () => {
    const { loading, data } = useQuery(QUERY_ALL_PROJECTS)
    const projects = data?.projects || [];
    return (
      <div className='h-100 fluid'>
      <h1 className='justify-text-left border-bottom py-2 m-1 fw-bold'><span className='text-primary'>&gt;</span>portfolio</h1>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 p-1 g-2 h-50 d-flex'>
          <ProjectList projects={projects}/>
        </div>
        
      </div>
      );
    };
export default Portfolio 