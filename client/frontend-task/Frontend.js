import React from "react";
import Navbar from "./navbar";

import "../frontend-task/Frontend.css";

import logo1 from "./media/women.jpg";
import logo2 from "./media/onlineShopping.jpg";
import logo3 from "./media/delievery.jpg";
import logo4 from "./media/easy.png";
import logo5 from "./media/vishal.png";
import logo6 from "./media/vlogo.png";

class Frontend extends React.Component {
  constructor() {
    super();
    this.state = {
      Phoneno: ""
    };
  }
  handleChange(e) {
    this.setState({ ...this, Phoneno: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ marginLeft: "30px", marginRight: "30px" }}>
          <Navbar />
          <section>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "400px" }}>
                <div>
                  <h1
                    style={{
                      fontSize: "25px",
                      marginTop: "30px",
                      marginLeft: "70px"
                    }}
                  >
                    Best way to Explore
                  </h1>
                  <h3
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      marginLeft: "70px"
                    }}
                  >
                    all nearby mom-dad retail shops
                  </h3>
                </div>

                <p
                  style={{
                    marginTop: "15px",
                    color: "grey",
                    width: "300px",
                    marginLeft: "70px"
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <center style={{ marginTop: "15px" }}>
                  <div>INSTALL NOW</div>
                  <div style={{ marginBottom: "10px" }}>
                    <i className="fas fa-download"></i>
                  </div>
                  <span style={{ marginRight: "20px", fontSize: "45px" }}>
                    <i className="fab fa-google-play"></i>
                  </span>
                  <span style={{ fontSize: "45px" }}>
                    <i className="fab fa-app-store"></i>
                  </span>
                  <div style={{ marginTop: "25px" }}>
                    <input
                      type="Number"
                      placeholder="Enter Your Number Please"
                      onChange={this.handleChange}
                    />
                    <button>
                      <a href="#">Get App Link</a>
                    </button>
                  </div>
                </center>
              </div>
              <div>
                <img src={logo1} height="400px" width="650px" />
              </div>
            </div>
          </section>
          <section>
            <center style={{ padding: "40px", fontSize: "35px" }}>
              <span style={{ color: "#5E5E5E" }}>Why Customer</span>
              &nbsp;
              <span style={{ color: "#5F5F5F", fontWeight: 600 }}>
                Loves OkkJi
              </span>
            </center>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#F7F7F7"
              }}
            >
              <div>
                <img
                  src={logo2}
                  height="300px"
                  width="500px"
                  style={{ marginLeft: "20px" }}
                />
              </div>
              <div style={{ marginLeft: "60px" }}>
                <h1
                  style={{
                    fontSize: "30px",
                    color: "#3365E2",
                    fontWeight: 600
                  }}
                >
                  Daily useable from nearby shops
                </h1>
                <p
                  style={{
                    width: "650px",
                    color: "#707070",
                    marginTop: "50px"
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <br />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "14px",
                    color: "#707070"
                  }}
                >
                  <span>
                    <input type="checkbox" />
                    Many Paymets Options
                  </span>
                  &nbsp;
                  <span>
                    <input type="checkbox" />
                    Street's Store On Smartphone
                  </span>
                  &nbsp;
                  <span>
                    <input type="checkbox" />
                    Digital Representation Of All Products
                  </span>
                  &nbsp;
                  <span>
                    <input type="checkbox" />
                    Digitalazation Of All UDHAAR
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "30px",
                marginBottom: "30px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  marginTop: "10px"
                }}
              >
                <h1
                  style={{
                    fontSize: "25px",
                    marginBottom: "10px",
                    color: "#3365E2",

                    marginTop: "50px"
                  }}
                >
                  Home-Delivery
                </h1>
                <p
                  style={{
                    width: "500px",
                    marginBottom: "10px",
                    color: "#707070",
                    marginTop: "50px"
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <span style={{ color: "#707070", marginTop: "20px" }}>
                  <input type="checkbox" />
                  Many Paymets Options
                </span>
                &nbsp;
                <span style={{ color: "#707070" }}>
                  <input type="checkbox" />
                  Street's Store On Smartphone
                </span>
                &nbsp;
                <span style={{ color: "#707070" }}>
                  <input type="checkbox" />
                  Digital Representation Of All Products
                </span>
                &nbsp;
                <span style={{ color: "#707070" }}>
                  <input type="checkbox" />
                  Digitalazation Of All UDHAAR
                </span>
              </div>
              <div>
                <img src={logo3} height="300px" width="500px" />
              </div>
            </div>
          </section>
          <section
            style={{
              marginTop: "50px",
              marginLeft: "30px",
              marginBottom: "30px"
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  marginTop: "10px"
                }}
              >
                <h1
                  style={{
                    fontSize: "25px",
                    marginBottom: "10px",
                    color: "#3365E2"
                  }}
                >
                  Khata Book
                </h1>
                <p
                  style={{
                    width: "400px",
                    marginBottom: "10px",
                    color: "#707070",
                    marginTop: "50px",
                    marginBottom: "40px"
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <span style={{ color: "#707070" }}>
                  <input type="checkbox" />
                  Many Paymets Options
                </span>
                &nbsp;
                <span style={{ color: "#707070" }}>
                  <input type="checkbox" />
                  Street's Store On Smartphone
                </span>
                &nbsp;
                <span style={{ color: "#707070" }}>
                  <input type="checkbox" />
                  Digital Representation Of All Products
                </span>
                &nbsp;
                <span style={{ color: "#707070" }}>
                  <input type="checkbox" />
                  Digitalazation Of All UDHAAR
                </span>
              </div>
              <div>
                <img src={logo1} height="230px" width="700px" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  marginTop: "10px"
                }}
              >
                <h1
                  style={{
                    fontSize: "25px",
                    marginBottom: "10px",
                    color: "#3365E2",

                    marginLeft: "90px"
                  }}
                >
                  Credit Pay
                </h1>
                <p
                  style={{
                    width: "400px",
                    marginBottom: "10px",
                    marginLeft: "90px",
                    marginTop: "50px",
                    marginBottom: "40px"
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <span style={{ marginLeft: "90px" }}>
                  <input type="checkbox" />
                  Many Paymets Options
                </span>
                &nbsp;
                <span style={{ marginLeft: "90px" }}>
                  <input type="checkbox" />
                  Street's Store On Smartphone
                </span>
                &nbsp;
                <span style={{ marginLeft: "90px" }}>
                  <input type="checkbox" />
                  Digital Representation Of All Products
                </span>
                &nbsp;
                <span style={{ marginLeft: "90px" }}>
                  <input type="checkbox" />
                  Digitalazation Of All UDHAAR
                </span>
              </div>
            </div>
            <section>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ marginTop: "20px" }}>
                  <h1
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      marginBottom: "15px",
                      marginTop: "20px"
                    }}
                  >
                    Testimonial
                  </h1>
                  <h2
                    style={{
                      color: "grey",
                      fontSize: "15px",
                      marginBottom: "10px"
                    }}
                  >
                    What Customer Say!
                  </h2>
                  <p style={{ color: "grey", marginBottom: "10px" }}>
                    Endorsement to our services that inspires enthusisam annd
                    zeal
                  </p>
                </div>
                <div style={{ marginTop: "40px", marginBottom: "30px" }}>
                  <div className="">
                    <i style={{ padding: "5px" }} className="fas fa-user">
                      {" "}
                      Piyush
                    </i>
                  </div>
                  <br />
                  <span style={{ marginTop: "10px" }}>Spring road</span>
                  <p style={{ marginTop: "10px", marginRight: "20px" }}>
                    <q>"Awesome products"</q>
                  </p>
                </div>
              </div>
              <div>
                <center>
                  <p style={{ color: "grey", fontSize: "20px" }}>
                    Trusted By Shop
                  </p>
                </center>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: "10px"
                  }}
                >
                  <img src={logo4} height="40px" width="60px" />
                  <img src={logo5} height="40px" width="60px" />
                  <img src={logo6} height="40px" width="60px" />
                  <img src={logo5} height="40px" width="60px" />
                  <img src={logo4} height="40px" width="60px" />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <center>
                    <div className="dot1"></div>
                    &nbsp;
                    <div className="dot1"></div>
                    &nbsp;
                    <div className="dot1"></div>
                    &nbsp;
                    <div className="dot1"></div>
                  </center>
                </div>
              </div>
            </section>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Frontend;
