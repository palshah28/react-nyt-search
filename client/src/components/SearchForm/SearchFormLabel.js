import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import { Label, Input } from 'reactstrap';
import './SearchForm.css';

const SearchFormLabel = (props) => (
  <Aux>
    <Label htmlFor={props.name}>{props.name}:</Label>
    <Input
      value={props.value}
      onChange={props.changed}
      type="text"
      className="form-control inputs"
    />
    <br></br>
  </Aux>
);

export default SearchFormLabel;