import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";
import { Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class SearchBooks extends Component {
  state = {
    query: "",
    books: []
  };

  handleInputChange = event => {
    this.setState({ query: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.query) {
      API.getGoogleBooks(this.state.query).then(res => {
        let results = res.data.items

        results = results.map(result => {
          result = {
            key: result.id,
            id: result.id,
            title: result.volumeInfo.title,
            author: result.volumeInfo.authors,
            description: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks.thumbnail,
            link: result.volumeInfo.infoLink
          }
          return result;
          
        })
        this.setState({books: results})
      }).catch(err => console.log(err))
    }
  };

  handleSaveButton = event => {
    event.preventDefault();
        console.log(this.state.books)
        let savedBook = this.state.books.filter(book => book.id === event.target.id)
        savedBook = savedBook[0];
        console.log(savedBook)
        API.saveBook(savedBook)
            .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err))
  };

  render() {
    return (
      <>
        <Container fluid>
          <Jumbotron>
            <h1>Find books using the GoogleBooks API</h1>
          </Jumbotron>
          <Row>
            <form>
              <Input
                value={this.state.query}
                name="query"
                placeholder="Enter book title"
                onChange={this.handleInputChange}
              />
              <FormBtn
                disabled={!this.state.query}
                onClick={this.handleFormSubmit}
              >
                Search for book!
              </FormBtn>
            </form>
          </Row>
        </Container>
        <Container>
          <Row>
            <SearchResults
              books={this.state.books} handleSaveButton={this.handleSaveButton}
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default SearchBooks
