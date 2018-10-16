import React, { Component } from "react";
import ArticleMaker from '../../components/ArticleMaker/ArticleMaker';
import myAPI from "../../utils/api/API";
import { Container, Card,  } from 'reactstrap';
import './SavedArticles.css';

class SavedArticles extends Component {
  state = {
    savedArticles: []
  }

  componentDidMount() {
    this.getArticlesHandler();
  }

  getArticlesHandler() {
    myAPI.getArticles()
      .then(res => this.setState({savedArticles: res.data}))
      .catch(err => console.log(err));
  }

  deleteArticleHandler = ( event, id ) => {
    myAPI.deleteArticle(id)
      .then(res => this.getArticlesHandler())
      .catch(err => console.log(err));
    }

  render() {

    let saved = <p>No articles saved yet!</p>

    if (this.state.savedArticles.length > 0) {
      saved = this.state.savedArticles.map((article, index) => {
        return <ArticleMaker
          key={article._id}
          articleId={article._id}
          headline={article.title}
          author={article.author}
          date={article.dateOfArticle}
          URL={article.URL}
          summary={article.summary}
          action={this.deleteArticleHandler}
          title="Remove from saved" />
      });
    }

    return (
      <Container>
        <h2>Search Results</h2>
        <Card className="search-cards" title="Saved Articles">
         {saved}
        </Card>
      </Container>
    )
  }
}

export default SavedArticles;