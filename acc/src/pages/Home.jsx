import profileImage from '../assets/me.jpeg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <img
          src={profileImage}
          alt="Nischal Bhujel"
          className="profile-pic"
        />
      </div>

      <div className="home-right">
        <h1>👋 Hello, I'm Nischal</h1>
        <p>
          I’m a frontend developer passionate about clean UI, smooth UX, and building functional, visually stunning web apps.
        </p>
        <a href="/nischal-cv.pdf" download className="download-btn">
          📄 Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
