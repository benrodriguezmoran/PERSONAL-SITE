import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Ratio, Modal, Image } from "react-bootstrap";
import {QUERY_PROJECT} from '../utils/queries'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import {LinkContainer} from 'react-router-bootstrap'

const Project = () => {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState(false);
    const {path} = useParams();
    const { loading, data } = useQuery(QUERY_PROJECT, {
        variables: { path : path },
      });
    const project = data?.project || [];
    const projectImg = project.image || [];
    return (
        <>  
        <h1 className='justify-text-left border-bottom py-2 m-1 fw-bold '><LinkContainer className='text-primary ' to="/portfolio"><a className='pe-auto link-primary link-underline-opacity-25 link-underline-opacity-100-hover'>&gt;portfolio</a></LinkContainer>/<br className='d-xl-none d-flex'></br>{project.title}</h1>
             <Ratio onClick={(event) => {event.preventDefault(true); setShow(true); setModalData(projectImg)}} className="rounded-3 shadow-lg" style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${projectImg})`}} 
                aspectRatio="16x9">
                <></>
            </Ratio>
                <Markdown className="text-light p-2 m-1" rehypePlugins={[rehypeRaw]}>{project.content}</Markdown>
            <Modal onClick={() => {setShow(false)}} className="text-light modal-xl border-1" centered  show={show} onHide={() => setShow(false)}>
                <Image className="rounded-3" src={modalData}/>
                   
            </Modal>
        </>
)};
export default Project