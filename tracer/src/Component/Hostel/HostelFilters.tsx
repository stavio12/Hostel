import { Form, Container, Row, Col, Button } from "react-bootstrap";

const HostelFilters: React.FC = () => {
  return (
    <div className="pb-5 mb-3">
      <Container>
        <Form>
          <Col xs="auto" className="my-1">
            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
              Preference
            </Form.Label>
            <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
              <option value="Sort By">Sort By</option>
              <option value="price">Price</option>
              <option value="university">University</option>
              <option value="ratings">Ratings</option>
              <option value="location">Location</option>
            </Form.Control>
          </Col>
        </Form>
      </Container>
    </div>
  );
};

export default HostelFilters;
