import { Col, Container, Row } from "react-bootstrap";
import { UserList } from "../components/user-list/user_list";
import ModalCreate from "../components/modal/modal_create_user";
import ModalRouteUser from "../components/modal/modal_route_user";

function HomeTemplate() {
    return (<div className="Body-home">
        <Container >
            <Row>
                <Col>
                    <ModalCreate></ModalCreate>
                    <ModalRouteUser></ModalRouteUser>
                </Col>
            </Row>
            <UserList></UserList>
        </Container>
    </div>);
}

export default HomeTemplate;