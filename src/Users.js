import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, deleteUser } from "./store/users/users";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProfileCard from "./ProfileCard";

function Users() {
  const usersList = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>Users List</h1>
      <Row>
        {usersList.length > 0 &&
          usersList?.map((user) => (
            <Col md="3" key={user.id}>
              <ProfileCard
                user={user}
                deleteUser={deleteUser}
                dispatch={dispatch}
                addToFavorite={addToFavorite}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Users;
