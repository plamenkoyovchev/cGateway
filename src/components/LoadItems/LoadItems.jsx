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
    this.ws = null;
  }

  initSockets = () => {
    this.ws.addEventListener("open", e => {
      this.ws.addEventListener("message", event => {
        const message = JSON.parse(event.data);
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
    this.setState({ loading: true });
    axios
      .get("/loads")
      .then(async response => {
        const gwLoads = response.data.data;
        const rooms = await this.getRooms();

        gwLoads.forEach(load => {
          const currentRoom = rooms.find(r => r.id === load.room);
          load.roomName = currentRoom ? currentRoom.name : "not assigned";
        });

        this.setState({ loads: [...gwLoads] });
      })
      .catch(err => {})
      .finally(() => this.setState({ loading: false }));
  };

  getRooms = async () => {
    var rooms = await axios.get("/rooms");
    return rooms.data.data.map(r => {
      return {
        id: r.id,
        name: r.name
      };
    });
  };

  toggleLoad = (event, id, state) => {
    event.preventDefault();
    if (!state) {
      return;
    }

    const brightness = state.bri > 0 ? 0 : 100;
    this.setState({ loading: true });
    axios
      .put(`/loads/${id}/state`, { bri: brightness })
      .catch(err => {})
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    return (
      <div>
        {this.state.loading ? <Spinner /> : null}
        <div className="LoadItems">
          {this.state.loads.map(({ id, state, ...otherProps }) => (
            <LoadItem
              key={id}
              id={id}
              state={state}
              {...otherProps}
              toggleLoad={event => this.toggleLoad(event, id, state)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default LoadItems;
