import React from 'react';
import Card from 'react-bootstrap/Card';

function ProfileCard({ user }) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {user.email}
          </Card.Text>
          <Card.Text>
            <strong>Last Name:</strong> {user.lastName}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfileCard;