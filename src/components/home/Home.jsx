import img from '../props/zdjRazem.jpg';
import Buttons from '../button/Button';
import { BsMouse } from 'react-icons/bs';
import './Home.css';

function Home() {

const handleClick = (e) => {
  e.currentTarget.classList.toggle('active');
}

  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="main-img" onClick={handleClick}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll-icon" />
        <hr />
      </a>

      <h2>
        <span>About Us</span> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aut
          voluptatibus accusamus veritatis recusandae aliquid dignissimos quam
          dicta nulla! Recusandae?
        </p>
      </h2>

      <Buttons />
    </div>
  );
}
// const toggle = document.querySelector('.main-img');
// toggle.addEventListener("click", () => {
//   toggle.classList.toggle("active");
// });

export default Home;