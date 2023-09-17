import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <footer className="site-footer">
        <Container>
            <Row>
            <Col xs={{ size: 4, offset: 1 }} sm='2'>
                <h5>This will be the site navigation site</h5>
            </Col>
            <Col xs='6' sm='3' className='text-center'>
                <h5>Social</h5>
                <a
                className="btn btn-social-icon btn-instagram"
                href="http://instagram.com/"
                >
                <i className="fa fa-instagram" />
                </a>{" "}
                <a
                className="btn btn-social-icon btn-facebook"
                href="http://facebook.com/"
                >
                <i className="fa fa-facebook" />
                </a>{" "}
                <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
                >
                <i className="fa fa-twitter" />
                </a>{" "}
                <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
                >
                <i className="fa fa-youtube" />
                </a>
            </Col>
            <Col sm='4' className='text-center'>
                <a role="button" className="btn btn-link" href="tel:+12065551234">
                <i className="fa fa-phone" /> 1-206-555-1234  

                </a>
                <br />
                <a
                role="button"
                className="btn btn-link"
                href="mailto:notreal@noreal.co">
                <i className="fa fa-envelope-o" />
                </a>
                </Col>

            </Row>
        </Container>
        </footer>
    );
    };
    export default Footer;