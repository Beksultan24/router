import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="block">
        <img
          className="image-home"
          src="https://cdn.dribbble.com/users/230875/screenshots/12589592/media/a12435c0fd22de967b379b098f606683.jpg?compress=1&resize=1200x900&vertical=top"
          alt="Beksultan-icon"
        />

        <h2>Hi!It's main page!</h2>

        <button className="btn">
          <a className="link" href="https://github.com/Beksultan24">
            GitHub
          </a>
        </button>
        <button className="btn link">Twiter</button>
        <button className="btn">
          <a className="link" href="https://www.t.me/boronchiev_b">
            Telegram
          </a>
        </button>
        <button className="btn">
          <a className="link" href="https://www.instagram.com/boronchiev_b/">
            Instagram
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
