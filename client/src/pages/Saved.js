import React, { Component } from "react";
import API from "../utils/API";
import { Container} from "../components/Grid";
import SavedResults from "../components/SavedResults"

class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        API.getBooks().then(res => this.setState({savedBooks: res.data})).catch(err => console.log(err))
    };

    handleDelete = id => {
        API.deleteBook(id).then(res => this.componentDidMount()).catch(err => console.log(err))
    };

    render () {
        return (
            <Container>
                <Container>
                    <SavedResults savedBooks={this.state.savedBooks} handleDelete={this.handleDelete} />
                </Container>
            </Container>
        )
    }
};

export default Saved