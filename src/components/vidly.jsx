import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./movies";
import NavBar from "./common/navbar";
import Customers from "./customers";
import Rentals from "./rentals.";
import MovieForm from "./movieForm";
import NotFound from "./notFound";
class Vidly extends Component {
  state = {};
  handleSelect = activeItem => {
    this.setState({ activeItem });
  };
  render() {
    const items = [
      { _id: 1, name: "Movies", path: "/movies" },
      { _id: 2, name: "Customers", path: "/customers" },
      { _id: 3, name: "Rentals", path: "/rentals" }
    ];
    const { activeItem } = this.state;
    return (
      <React.Fragment>
        <NavBar
          items={items}
          onSelect={this.handleSelect}
          activeItem={activeItem}
        />
        <div>
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default Vidly;
