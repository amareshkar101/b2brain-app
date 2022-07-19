import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import img from "../assets/woman_prev_ui.png";
import img1 from "../assets/Auditoria.png";
import img2 from "../assets/fareye_logo.png";
import img3 from "../assets/capillary.png";
import img4 from "../assets/increff.png";
import img5 from "../assets/customer1.jpeg";
import img6 from "../assets/customer2.png";
import "../styles/Home.css";

function Home() {
  const [show, setShow] = useState("true");
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");

  //api fetching

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setItems(data);
    };

    fetchData();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      console.log("Input is empty");
    } else {
      setQuery(text);
      setText("");
    }

    if (show === true) {
      setShow(!show);
    }
  };
  console.log(show);

  const toggleShow = () => {
    if (show === false) {
      setShow(!show);
    }
  };
  return (
    <>
      <Sidebar />
      <div>
        {/* search bar */}
        {/* <Searchbar /> */}
        <div className="search">
          <div className="searchInputs">
            <div className="searchIcon">
              <SearchIcon
                style={{
                  color: "silver",
                  cursor: "pointer",
                }}
              />
            </div>

            <form autoComplete="off" onSubmit={handleSubmit}>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search by account name or website"
                autoComplete="off"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ fontSize: "18px" }}
              />
            </form>
            <NotificationsIcon
              style={{
                color: "silver",
                marginTop: "20px",
                marginLeft: "4px",
                cursor: "pointer",
              }}
            />

            <Avatar
              alt="amaresh"
              style={{
                marginTop: "20px",
                marginLeft: "5px",
                cursor: "pointer",
              }}
              sx={{ width: 23, height: 23 }}
              variant="square"
              onClick={() => toggleShow()}
            />
          </div>
        </div>
        {/* home page */}
        {show ? (
          <>
            <div>
              <div className="i">
                <div className="i-left">
                  <h1 className="sales-pitch">
                    Increase your pipeline
                    <br /> by <span className="pc">35-150%</span>
                  </h1>
                  <h4 className="sub-header">
                    Automated account intelligence for your sales team
                  </h4>
                </div>
                <div className="i-right">
                  <div className="i-bg"></div>
                  <img className="i-img" src={img} />
                </div>
              </div>

              <div className="customer-banner">
                <h1 className="customers">
                  Trusted by enterprise sales teams globally
                </h1>
                <div className="logo-box">
                  <img className="img-logo" src={img1} />
                  <img className="img-logo" src={img2} />
                  <img className="img-logo" src={img3} />
                  <img className="img-logo" src={img4} />
                </div>
              </div>

              <div class="container">
                <h1 className="header">Hear from our customers</h1>
                <div class="testimonial">
                  <div class="avatar">
                    <img className="pic" src={img5} />
                  </div>
                  <div class="body">
                    <p className="testimony">
                      I usually spend 15-20 min researching an account. B2Brain
                      shows me unique insights about my target accounts, right
                      when I need them, saving over 15 min of my time per
                      account.
                    </p>
                  </div>
                  <div class="footer">
                    <h1 className="h1-text">
                      Amit Shah, Mid-Market Account Executive
                    </h1>
                    <p className="footer-text">SignalSciences</p>
                  </div>
                </div>

                <div id="testimony-2" class="testimonial">
                  <div class="avatar">
                    <img className="pic" src={img6} />
                  </div>
                  <div class="body">
                    <p className="testimony">
                      Within minutes of getting to know about B2Brain, I was
                      able to get started without any external help whatsoever.
                      The intuitive user experience is compelling and highly
                      engaging. The quality of insights improve the
                      personalization significantly.
                    </p>
                  </div>
                  <div class="footer">
                    <h1 className="h1-text">Nick Ezzo, VP Marketing</h1>
                    <p className="footer-text">Auditoria</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="section">
              <div className="cards">
                <h3 className="cards-header">Similar accounts</h3>
                <br />
                {items.map((item) => {
                  const { company, slug, logo, website } = item;

                  return (
                    <div key={slug} className="display">
                      <div className="tile">
                        <Avatar
                          alt="amaresh"
                          src={logo}
                          style={{
                            marginTop: "20px",
                            marginLeft: "5px",
                            cursor: "pointer",
                          }}
                          sx={{ width: 60, height: 60 }}
                          variant="square"
                        />
                        <div className="tile-text">
                          <h3 className="company">{company}</h3>
                          <p className="website">{website}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
        {/* end of data dashboard */}
      </div>
    </>
  );
}

export default Home;
