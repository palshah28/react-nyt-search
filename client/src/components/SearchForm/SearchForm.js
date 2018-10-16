import React from 'react';
import SearchFormLabel from './SearchFormLabel';
import SearchButton from './SearchButton';
import { Form, Card } from 'reactstrap';
import './SearchForm.css';

const SearchForm = props => {

  const searchLabels = props.labels.map((label, index) => {
    return <SearchFormLabel
      name={label.id}
      value={label.val}
      changed={(event) => props.changed(event, label.id)}
      key={label.id} />         
  });

  return (
    <Form className="search-form ">
      <Card className="search-card center">
        {searchLabels}
        <SearchButton clicked={props.submit} />
      </Card>
    </Form>
  );
}
  
export default SearchForm;