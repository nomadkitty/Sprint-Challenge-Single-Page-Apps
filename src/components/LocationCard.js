import React from "react";
import { Card } from "semantic-ui-react";



export default function LocationCard(props) {
  return (
    <Card key={props.id} className="locationCard">
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          {`${props.type} - ${props.dimension}`}
        </Card.Description>
        <Card.Meta className="locationMeta">{`${props.residents} residents`}</Card.Meta>
      </Card.Content>
    </Card>

  )
}
