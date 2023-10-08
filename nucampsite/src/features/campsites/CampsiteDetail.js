import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { selectCampsiteById } from "./campsitesSlice";

const CampsiteDetail = ({ campsiteId }) => {
  const campsite = useSelector((state) => selectCampsiteById(state, campsiteId));
  const { name: campsiteName, image, description } = campsite;
  return (
    <Col md='5' className='m-1'>
      <Card>
        <CardImg top src={image} alt={campsiteName} />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CampsiteDetail;