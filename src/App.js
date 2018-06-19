import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"
//image imports (since I'm not using a server)
import chicks from "./images/chicks.jpg"
import elephant from "./images/elephant.jpg"
import flamingo from "./images/flamingo.jpg"
import giraffe from "./images/giraffe.jpg"
import horse from "./images/horse.jpg"
import kitty from "./images/kitty.jpg"
import lion from "./images/lion.jpg"
import parrot from "./images/parrot.jpg"
import sheep from "./images/sheep.jpg"
import zebra from "./images/zebra.jpg"
import leopard from "./images/leopard.jpg"
import panda from "./images/panda.jpg"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "elephant":
        return `${elephant}`
      case "flamingo":
        return `${flamingo}`
      case "giraffe":
        return `${giraffe}`
      case "horse":
        return `${horse}`
      case "kitty":
        return `${kitty}`
      case "lion":
        return `${lion}`
      case "parrot":
        return `${parrot}`
      case "sheep":
        return `${sheep}`
      case "zebra":
        return `${zebra}`
      case "leopard":
        return `${leopard}`
      case "panda":
        return `${panda}`
      case "chicks":
        return `${chicks}`
      default:
        return `${flamingo}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
