import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false
    };
  }
  handleVideo = () => {
    this.setState({
      showVideo: !this.state.showVideo
    });
  };
  render() {
    return (
      <div>          
        <h2>my video </h2>
        
        <div
          onClick={this.handleVideo}
          style={{
            backgroundColor: "grey",
            display: "inlinme",
            color: "white",
            margin: 40,
            padding: 20,
            borderRadius: 10
          }}
        ></div>

        {this.state.showVideo == true && (
         <span>
         <iframe
            width="100%"
            height="100vh"
            src="https://www.youtube.com/embed/P_Fs9u33GRk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <button onClick={this.showVideo }
          style={{
            position :"absolute",
            left:10,
            top:100
          }}>
              back
          </button>
          </span>
          
        )}
      </div>
    );
  }
}
