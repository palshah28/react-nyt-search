import React from 'react';
import { Button, Card, CardTitle, CardText, CardBody } from 'reactstrap';
import './ArticleMaker.css';

const ArticleMaker = (props) => (
  <Card className="cards" id={props.articleId}>
    <CardTitle className="articleHeadline">
      <strong>{props.headline}</strong>
    </CardTitle>
    <CardBody>
      <CardText>Date: {props.date}</CardText>
      <CardText> {props.summary}</CardText>
    </CardBody>
    <Button className="btns"><a href={props.URL} target="_blank">Read</a></Button> {" "}
    <br/>
    <Button className="btns" title={props.title} clicked={(event) => props.action(event, props.articleId)}>Save</Button>
  </Card>
);

export default ArticleMaker;