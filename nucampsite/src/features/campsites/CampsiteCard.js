import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

//use const keyword and arrow function component named campsiteCard, with a parameter of props
const CampsiteCard = ({campsite}) => {
    const{id, image, name} = campsite;
    return (
        <div>
            
            <Link to={`${id}`}>
            <Card>
                <CardImg width="100%" src={image} alt={name} />
                
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
            </Link>
        </div>
    );
}
export default CampsiteCard;



