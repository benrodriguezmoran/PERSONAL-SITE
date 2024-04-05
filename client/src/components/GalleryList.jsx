import { Image, Ratio, Button, Modal } from "react-bootstrap";
import { useState } from "react";
const GalleryList = ({images = []}) => {
    if (!images.length) {
        return <>no data</>
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return (
    <>
        {images && images.map((image) => (
        <Ratio style={{width: '15rem'}}>
            <Button variant="primary" onClick={handleShow}>
            <Image fluid key={image._id} src={image.path}  className=""/>
            </Button>
        </Ratio>
        ))}
    </>
    );
} 
export default GalleryList