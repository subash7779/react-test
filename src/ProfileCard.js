import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHeartCirclePlus,
  faEdit,
  faTrash,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./logo.svg";
import "./ProfileCard.css";

const ProfileCard = ({ user, dispatch, deleteUser, addToFavorite }) => {
  return (
    <Card className="profile-card">
      <Card.Img variant="top" src={logo} className="profile-img" />
      <Card.Body>
        <Card.Title>{user?.name}</Card.Title>
        <Card.Text>
          <FontAwesomeIcon className="profile-icon" icon={faEnvelope} />
          {user?.email}
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon className="profile-icon" icon={faPhone} />
          {user?.phone}
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon className="profile-icon" icon={faGlobe} />
          {user?.website}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted text-center">
        <Row>
          <Col md="4">
            <Button
              variant="light"
              onClick={() => dispatch(addToFavorite(user))}
            >
              <FontAwesomeIcon
                icon={user?.isFav ? faHeart : faHeartCirclePlus}
              />
            </Button>
          </Col>
          <Col md="4">
            <Button variant="light" href={`/edit-user/${user.id}`}>
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </Col>
          <Col md="4">
            <Button variant="light" onClick={() => dispatch(deleteUser(user))}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default ProfileCard;
