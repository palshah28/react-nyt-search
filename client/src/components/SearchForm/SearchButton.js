import React from 'react';
import { Button } from 'reactstrap';
import './SearchForm.css';

const SearchButton = (props) => (
    <Button 
      id="srch-btn"
      onClick={props.clicked}
      className="btn btn-primary">
      Search
    </Button>
);

export default SearchButton;