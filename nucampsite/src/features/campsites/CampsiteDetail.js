import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import CommentsList from "../features/comments/CommentsList";

const CampsiteDetail = ({ campsite }) => {
  const { name, description, image } = campsite;
  return (
    <Col md='5' className='m-1'>
      <Card>
        <CardImg top src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CampsiteDetail;