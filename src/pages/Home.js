import React from 'react';
import profile from '../images/profile.jpg';
import Header from '../components/Header';
import '../css/Home.css';

export default function Home() {
  return (
    <div>
      <Header />
      <section className="home-section section">
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="home-img">
              <div className="img-box inner-shadow">
                <img src={profile} className="outer-shadow" alt="profile" />
              </div>
            </div>
            <div className="home-text">
              <h2>Priscila Torres</h2>
              <p>Olá</p>
              <h1>Aqui meu texto de apresentação</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
