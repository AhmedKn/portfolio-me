import React from 'react'
import axios from "axios";
import "../css/dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      custom: [],
      buyorders: [],
      visits: 0,
      adresses: [],
    };
  }
  componentDidMount() {
    this.showcustommails();
    this.showordersmails();
    this.showvisits();
    this.showadresses();
  }
  showcustommails = () => {
    axios
      .get("/Portfolio/showmails")
      .then((res) => this.setState({ custom: res.data }))
      .catch((err) => console.error(err));
  };
  showordersmails = () => {
    axios
      .get("/Portfolio/showorders")
      .then((res) => this.setState({ buyorders: res.data }))
      .catch((err) => console.error(err));
  };
  deletemail = (id) => {
    axios
      .delete(`/Portfolio/deletemail/${id}`)
      .then(console.log("deleted"))
      .catch((err) => console.error(err));
  };
  deletecustommail = (id) => {
    axios
      .delete(`/Portfolio/deletecustommail/${id}`)
      .catch((err) => console.error(err));
  };
  showvisits = () => {
    axios
      .get("/Portfolio/showvisitors")
      .then((res) => {
        this.setState({ visits: res.data.countvisitors });
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };
  showadresses = () => {
    axios
      .get("/Portfolio/showadresses")
      .then((res) => this.setState({ adresses: res.data }))
      .catch((err) => console.error(err));
  };
  deleteadress=(id)=>{
    axios.delete(`/Portfolio/deleteadress/${id}`).catch(err => console.error(err))
  }
  render() {
    return (
      <div>
         <div className="visitors-section">
          <h2>Visits Section</h2>
          <p className="visits-counter">Visits: {this.state.visits}</p>
        </div>
        <div className="custommailsSection">
          <h2>Custom-Mails</h2>
          <div className="custommail-section">
            {this.state.custom.map((el) => {
              return (
                <div className="card-custommail" key={el._id}>
                  <p className="custident">firstname: {el.firstname}</p>
                  <p className="custident">lastname: {el.lastname}</p>
                  <p className="custident">email: {el.email}</p>
                  <p className="custident">subject: {el.subject}</p>
                  <p className="custident">message: {el.message}</p>
                  <button onClick={() => this.deletecustommail(el._id)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ordersmailsSection">
          <h2>Orders-Mails</h2>
          <div className="ordersmail-section">
            {this.state.buyorders.map((el) => {
              return (
                <div className="card-custommail" key={el._id}>
                  <p className="custident">Web-type: {el.webtype}</p>
                  <p className="custident">Price: {el.Price}</p>
                  <p className="custident">Technologie: {el.tech}</p>
                  <p className="custident">Name: {el.name}</p>
                  <p className="custident">Email: {el.email}</p>
                  <p className="custident">Message: {el.message}</p>
                  <button onClick={() => this.deletemail(el._id)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="adressesSection">
          <h2>Adresses</h2>
          <div className="adresses-section">
            {this.state.adresses.map((el) => {
              return (
                <div key={el._id} className="card-custommail">
                  <p className="custident">IPv4: {el.IPv4}</p>
                  <p className="custident">city: {el.city}</p>
                  <p className="custident">country-code: {el.country_code}</p>
                  <p className="custident">country: {el.country_name}</p>
                  <p className="custident">latitude: {el.latitude}</p>
                  <p className="custident">longtitude: {el.longitude}</p>
                  <p className="custident">state: {el.state}</p>
                  <button onClick={() => this.deleteadress(el._id)}>Delete</button>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    );
  }
}

export default Dashboard;
