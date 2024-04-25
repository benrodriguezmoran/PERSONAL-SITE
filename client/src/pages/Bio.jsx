import { Container, Image, Ratio, Row, Col} from "react-bootstrap"
const Bio = () => {
    return (
        <>
            <h1 className='justify-text-left position-relative border-bottom p-0 py-2 m-1 fw-bold'><span className='text-primary'>&gt;</span>bio</h1>
            <Container>
                <Row>
                <Col>
                <Ratio className="image rounded-3 shadow-lg" style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(/thumbnail/thumb-me.jpg)`}} 
                    aspectRatio='1x1'>
                    <></>
                </Ratio>
                </Col>
                <Col>
                </Col>
                </Row>
            </Container>
        </>
    )
}
export default Bio