import reactstrap from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

//use const keyword and arrow function component named campsiteCard, with a parameter of props
const CampsiteCard = (props) => {
    return (
        <div>
            {/* use props.campsite to access the campsite object passed in as a prop */}
            <Card>
                <CardImg width="100%" src={props.campsite.image} alt={props.campsite.name} />
                {/* use props.campsite to access the campsite object passed in as a prop */}
                <CardImgOverlay>
                    <CardTitle>{props.campsite.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}
export default CampsiteCard;