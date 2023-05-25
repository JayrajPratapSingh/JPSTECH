import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>JPSTech</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are solution to the tech probelms you face every day. We are leading tech comapany whose aim is to increase the problem solving ability.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            As a software developer specializing in JavaScript, HTML, CSS, React.js, Node Js, Express JS, Mongo DB I am a crucial
            member of the modern tech ecosystem. React.js is a powerful
            JavaScript library that enables you to build interactive user
            interfaces for web applications with efficiency and scalability.
            My expertise lies in designing and implementing robust front-end
            solutions that deliver exceptional user experiences. As a React.js
            developer, i possess a deep understanding of the core concepts of
            React, such as components, state management, and virtual DOM
            manipulation. I leverage this knowledge to architect modular and
            reusable code, allowing for easier maintenance and collaboration
            within development teams.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}} >
                    <AiFillGoogleCircle />
                    <p>Google</p>

                </div>

                <div style={{animationDelay:"0.5s"}} >
                    <AiFillAmazonCircle />
                    <p>Amazon</p>

                </div>

                <div style={{animationDelay:"0.7s"}} >
                    <AiFillYoutube/>
                    <p>You Tube</p>

                </div>

                <div style={{animationDelay:"1s"}} >
                    <AiFillInstagram />
                    <p>Instagram</p>

                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
