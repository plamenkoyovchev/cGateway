import React, { Component } from "react";
import axios from "../../http/axiosGateway";

import "./LoadItems.scss";

import LoadItem from "./LoadItem/LoadItem";
import Spinner from "../UI/Spinner/Spinner";

class LoadItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loads: [],
      loading: false
    };
    this.ws = new WebSocket("ws://lisagateway-103.localy/api");
  }

  componentDidMount() {
    this.initLoads();
    this.initSockets();
  }

  componentWillUnmount() {
    this.ws.close();
    this.ws.removeEventListener("message", e => {});
  }

  initSockets = () => {
    this.ws.addEventListener("open", e => {
      this.ws.addEventListener("message", event => {
        const message = JSON.parse(event.data);
        console.log(message);
        const loadIdx = this.state.loads.findIndex(
          l => l.id === message.load.id
        );
        if (loadIdx >= 0) {
          const newLoad = {
            ...this.state.loads[loadIdx],
            state: { ...message.load.state }
          };
          const loadsToUpdate = [...this.state.loads];
          loadsToUpdate[loadIdx] = newLoad;
          const newLoads = loadsToUpdate;
          this.setState({ loads: newLoads });
        }
      });

      this.ws.send('{ "command":"dump_loads" }');
    });
  };

  initLoads = () => {
    console.log("initLoads");
    this.setState({ loading: true });
    axios
      .get("/loads")
      .then(response => {
        this.setState({ loads: [...response.data.data] });
      })
      .catch(err => {})
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    return (
      <div>
        {this.state.loading ? <Spinner /> : null}
        <div className="LoadItems">
          {this.state.loads.map(({ id, ...otherProps }) => (
            <LoadItem key={id} id={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default LoadItems;
