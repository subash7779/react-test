import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "./store/users/users";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ProfileCard.css";

function EditUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const userList = useSelector((state) => state.users);
  const userIndex = userList.findIndex((u) => u.id === parseInt(params.id));
  const user = userList[userIndex];

  const [formValue, setFormValue] = useState(user);

  const onHandleChange = (e) => {
    const target = e.target;
    var value = target.value;
    const key = target.name;
    setFormValue({ ...formValue, [key]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formValue));
    navigate("/");
  };
  return (
    <Container>
      <h1>
        Edit User{" "}
        <Button variant="primary" href="/" className="pull-right">
          User List
        </Button>
      </h1>
      {user ? (
        <Form onSubmit={onFormSubmit}>
          <Row>
            <Col md="6">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={user.name}
                  name="name"
                  onChange={onHandleChange}
                />
              </Form.Group>
            </Col>

            <Col md="6">
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={user.email}
                  name="email"
                  onChange={onHandleChange}
                />
              </Form.Group>
            </Col>

            <Col md="6">
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={user.phone}
                  name="phone"
                  onChange={onHandleChange}
                />
              </Form.Group>
            </Col>

            <Col md="6">
              <Form.Group className="mb-3">
                <Form.Label>Website</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={user.website}
                  name="website"
                  onChange={onHandleChange}
                />
              </Form.Group>
            </Col>
            <Col md="12" className="text-right">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      ) : (
        <h6>No user found !</h6>
      )}
    </Container>
  );
}

export default EditUser;
