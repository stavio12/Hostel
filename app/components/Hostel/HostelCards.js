import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function hostelCards() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <div className="text-left">
                  <h6>
                    Name :<span className="font-weight-bolder"> Hostel</span>
                    <br /> Madina .
                    <abbr title="Telephone">
                      <a href="tel:+2562501258">0584515</a>
                    </abbr>
                    <span className="price float-right p-2 text-white rounded font-weight-bolder">GHC 100 </span>
                  </h6>
                </div>

                <br />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <div className="text-left">
                  <h6>
                    Name :<span className="font-weight-bolder"> Hostel</span>
                    <br /> Madina .
                    <abbr title="Telephone">
                      <a href="tel:+2562501258">0584515</a>
                    </abbr>
                    <span className="price float-right p-2 text-white rounded font-weight-bolder">GHC 100 </span>
                  </h6>
                </div>

                <br />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </Card.Body>
            </Card>{" "}
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <div className="text-left">
                  <h6>
                    Name :<span className="font-weight-bolder"> Hostel</span>
                    <br /> Madina .
                    <abbr title="Telephone">
                      <a href="tel:+2562501258">0584515</a>
                    </abbr>
                    <span className="price float-right p-2 text-white rounded font-weight-bolder">GHC 100 </span>
                  </h6>
                </div>

                <br />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </Card.Body>
            </Card>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default hostelCards;
