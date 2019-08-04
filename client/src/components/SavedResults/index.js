import React from "react";
import {Row, Col} from "../Grid"

const SavedResults = props => {
    return (!props.savedBooks.length) ? (
        <div className="card">
            <div className="card-body player">
                <h3>Books you have saved</h3>
            </div>
        </div>
    ) : (
        <div className="card">
            <div className="card-body player">
                <h3>Books you have saved</h3>
                {props.savedBooks.map(book => {
                    return (
                        <li className="list-group-item">
                            <Row className="row" key={book._id}>
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
                                <button className="saveBook btn btn-primary" id={book.id} onClick={() => props.handleDelete(book._id)}>
                                    Delete Book
                                </button>
                                <a href={book.link} target="_blank" rel="noopener noreferrer">
                                    <button className="learnMore btn btn-success">
                                        Learn More!
                                    </button>
                                </a>
                            </Row>
                        </li>
                    );
                })}
            </div>
        </div>
    )
};

export default SavedResults