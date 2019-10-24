import React from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <React.Fragment>
      {/* <header className="Header">
        <div className="Header-right-container">
          <img className="Header-profile-pic" src={profile} alt="profile" />
        </div>
        <div className="Header-middle-container">
          <div className="Header-middle-name">Anton Freyr Magnússon</div>
          <div className="Header-middle-summary">
            Single dad with a passion for masturbation.
          </div>
        </div>
        <div className="Header-left-container">
          <img className="Header-profile-pic" src={profile} alt="profile" />
        </div>
      </header> */}
      <Header></Header>
      <main class="Content">
        <article class="Item">
          <div class="Item-heading">Pied Piper</div>
          <div class="Item-sub-heading">November 2018 - Present</div>
          <p class="Item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
            imperdiet ligula. Duis non nibh ultricies, tempor mauris at, finibus
            dui. Sed sit amet venenatis nisi. Ut volutpat lobortis nulla vitae
            tincidunt. Ut interdum ullamcorper magna, at aliquet ante luctus
            non. Maecenas pulvinar vel leo eu lobortis. Nullam eget ligula
            ipsum.
          </p>
        </article>
        <article class="Item">
          <div class="Item-heading">Aviato</div>
          <div class="Item-sub-heading">April 2017 - October 2018</div>
          <p class="Item-description">
            Etiam et turpis id eros mollis faucibus eget nec justo. Vivamus
            interdum leo sapien, sit amet euismod augue porta vitae. Praesent
            vitae ligula pretium, gravida felis ac, rhoncus orci. Sed et elit
            eget lectus vulputate venenatis. Quisque gravida lorem quis risus
            commodo maximus. Aliquam erat volutpat. In a lobortis tellus, eu
            efficitur libero.
          </p>
        </article>
        <article class="Item">
          <div class="Item-heading">Hooli</div>
          <div class="Item-sub-heading">May 2015 - Mars 2017</div>
          <p class="Item-description">
            Quisque ornare sodales metus id dapibus. Quisque sodales aliquet
            lacus non cursus. In at massa vitae purus congue aliquam. Mauris
            tempor accumsan fermentum. Aenean volutpat porta libero nec
            fermentum. Ut finibus nunc id erat venenatis, quis iaculis erat
            tincidunt. Nullam vitae mauris varius, eleifend risus sed, rhoncus
            felis. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
        </article>
      </main>
    </React.Fragment>
  );
}

export default App;
