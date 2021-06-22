import React from "react";
import data from "./data.json";
import Products from "./components/products";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React shopping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">cart item</div>
          </div>
        </main>
        <footer>all right reserved</footer>
      </div>
    );
  }
}

export default App;
