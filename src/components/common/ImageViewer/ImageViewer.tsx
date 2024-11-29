import { Card, Col } from "react-bootstrap";

interface Props {
  image?: string;
}
const ImageViewer = ({ image }: Props) => {
  return (
    <>
      {image && (
        <Col xs="12" className="text-center">
          <div style={{ width: "100px", height: "100px" }}>
            <Card>
              <Card.Body>
                <img
                  src={`/images/${image}`}
                  alt="Uploaded Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    objectFit: "contain",
                  }}
                />
              </Card.Body>
            </Card>
          </div>
        </Col>
      )}
    </>
  );
};

export default ImageViewer;
