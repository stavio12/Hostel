import { CardGroup, Card, Row, Col, Container } from "react-bootstrap";
import { useTypedSelector } from "../../hook/useTypeSelector";

const HostelCards: React.FC = () => {
  const { data } = useTypedSelector((state: any) => state.hostel);
  return (
    <>
      <Container>
        <Row>
          {" "}
          <CardGroup>
            {data.map((hostel: any) => {
              return (
                <Col xs={12} md={4} className="pb-5">
                  <Card>
                    <Card.Img variant="top" src={hostel.imageCover} />
                    <Card.Body>
                      <Card.Title>
                        <span className="font-weight-bolder"> {hostel.hostelName}</span>
                        <br /> {hostel.location} .
                        <abbr title="Telephone">
                          <a href="tel:+2562501258">{hostel.contact}</a>
                        </abbr>
                        <span className="price float-right p-2 text-white rounded font-weight-bolder">GHC {hostel.price} </span>
                        <br />
                        University: {hostel.university}
                      </Card.Title>
                      <Card.Text>{hostel.overview} </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </CardGroup>
        </Row>{" "}
      </Container>
    </>
  );
};

export default HostelCards;
