import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'


export default function CharacterCard(props) {
  return (
    <Card key={props.id}>
    <Image src={props.imgUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{`${props.species} ${props.status}`}</Card.Meta>
      <Card.Description>
        {`Location: ${props.location}`} <br />
        {`Origin: ${props.origin}`}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episode
      </a>
    </Card.Content>
  </Card>

  );
}
