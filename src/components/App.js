import React, { Component } from "react";
import { Link } from "react-router";


export default class App extends Component {
  render() {
    const {
      content,
    } = this.props;
    return (
      <div>
        <main className="container">
          {content || <p>Default.</p>}
        </main>
        <footer>
          <div className="footer-copyright">
            <div className="container">
            © 2016 Powered by <a className="grey-text text-lighten-3" href="https://kinto.readthedocs.io">Kinto</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
