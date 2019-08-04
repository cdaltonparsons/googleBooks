import React from "react";
import {Row, Col} from "../Grid"

const SearchResults = props => {
    return (!props.books.length) ? (
        <div className="card">
            <div className="card-body player">
                <h3>Search Results</h3>
            </div>
        </div>
    ) : (
        <div className="card">
            <div className="card-body player">
                <h3>Search Results</h3>
                {props.books.map(book => {
                    return (
                        <li className="list-group-item" key={book._id}>
                            <Row className="row" id={book.title}>
                                <Col size="md-3" className="bookPic">
                                    <img src={book.image} alt={book.title} />
                                </Col>
                                <Col size="md-9" className="bookInfo">
                                    <Row>
                                        <h3 className="bookTitle">{book.title}</h3>
                                    </Row>
                                    <Row>
                                        <h4 className="bookAuthor">{book.author}</h4>
                                    </Row>
                                    <Row>
                                        <p className="bookSummary">{book.description}</p>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSaveButton(event)}>
                                    Save Book
                                </button>
                                <a href={book.link} target="_blank" rel="noopener noreferrer">
                                    <button className="learnMore btn btn-success">
                                        Learn More!
                                    </button>
                                </a>
                            </Row>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchResults