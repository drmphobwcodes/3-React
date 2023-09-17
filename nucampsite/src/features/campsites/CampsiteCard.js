import reactstrap from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

//use const keyword and arrow function component named campsiteCard, with a parameter of props
const CampsiteCard = ({campsite}) => {
    const{image, name} = campsite;
    return (
        <div>
            {/* use props.campsite to access the campsite object passed in as a prop */}
            <Card>
                <CardImg width="100%" src={campsite.image} alt={props.campsite.name} />
                {/* use props.campsite to access the campsite object passed in as a prop */}
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}
export default CampsiteCard;

// Destructure the model property from the moto2 object, inside the parameter list for the listModel() function below.

const listModel = ({ model }) => {
    return (
        <div>
            <h1>{model}</h1>
        </div>
    );
}

