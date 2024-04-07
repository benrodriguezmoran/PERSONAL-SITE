import { Image, Card, Ratio, Button, Modal } from "react-bootstrap";
import { useState } from "react";
var imagesIn = [];
function shuffle(array){
            let idx = array.length;
            let tempArr = Array.from(array);
            while (idx !=0){
                console.log('test')
                let rIdx = Math.floor(Math.random() * idx);
                var temp = tempArr[idx];
                tempArr[idx] = tempArr[rIdx];
                tempArr[rIdx] = temp;
                idx--;
            }
        return(tempArr);
        };
const GalleryList = ({images = [], slice = 0}) => {
    if (!images.length) {
        return <>no data</>
    }
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState(false);
    if (slice != 0){
        imagesIn = Array.from(images);
        imagesIn = shuffle(imagesIn);
        imagesIn = Array.from(imagesIn.slice(0,slice));
      }
      else {imagesIn = Array.from(images)}
return (
    <>
        {imagesIn && imagesIn.map((image, idx) => (
            <Button key={idx}  className="p-1 m-0 rounded-3 " variant="link" 
            onClick={(event) => {event.preventDefault(true); setShow(true); setModalData(image)}}>
                <Ratio className="rounded-3 shadow-lg" style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${image.path})`}} 
                aspectRatio="1x1">
                <></>
                </Ratio>
                
            </Button>
        ))}
            <Modal onClick={() => {setShow(false)}} className="text-light modal-md border-1" centered  show={show} onHide={() => setShow(false)}>
                <Modal.Header className="border-0" >{modalData.title}</Modal.Header>
                <Image className="rounded-3" src={modalData.path}/>
                   
            </Modal>

    </>
    );
} 
export default GalleryList