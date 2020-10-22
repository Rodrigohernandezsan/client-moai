import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  state = {
    searchParams: "",
    results: [],
  };

  handleOnChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.searchResources();
      }
    );
  };

  searchResources = () => {
    this.setState({
      results: this.props.Resources.filter((resources) =>
      resources.name
          .toLocaleLowerCase()
          .includes(this.state.searchParams.toLocaleLowerCase())
      ),
    });
  };

  render() {
    const results = this.state.results;
    return (
      <div className="container">
        <h3>Search</h3>
        <div className="control">
          <input
            className="input is-primary"
            type="text"
            placeholder="Search"
            name="searchParams"
            value={this.state.searchParams}
            onChange={this.handleOnChange}
          />
        </div>
        <div>
          {results.map((resources) => (
            <div className="card" key={resources.id}>
              <img src={resources.image.medium} alt={resources.name} />
              <div className="resources-details">
                <h2>{resources.name}</h2>
                <div className="resources">
                  <strong>Resources:</strong> {resources.name}
                 
                </div>

                <Link to={`/courses/${resources.id}`}>Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


