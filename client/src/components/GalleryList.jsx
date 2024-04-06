import { Image, Card, Ratio, Button, Modal } from "react-bootstrap";
import { useState } from "react";
const GalleryList = ({images = []}) => {
    if (!images.length) {
        return <>no data</>
    }
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState(false);

return (
    <>
        {images && images.map((image, idx) => (
            <Button key={idx}  className="p-1 m-0 rounded-3" variant="link" 
            onClick={() => {setShow(true); setModalData(image)}}>
                <Ratio className="rounded-3 shadow-lg" style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${image.path})`}} 
                aspectRatio="1x1">
                {/* <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card>
                    <Card.ImgOverlay>

                    </Card.ImgOverlay>
                    </Card> */}<></>
                </Ratio>
                
            </Button>
        ))}
            <Modal onClick={() => {setShow(false)}} className="text-light modal-lg border-1" centered  show={show} onHide={() => setShow(false)}>
                <Modal.Header className="border-0" >{modalData.title}</Modal.Header>
                <Image className="rounded-3" src={modalData.path}/>
                   
            </Modal>
    </>
    );
} 
export default GalleryList