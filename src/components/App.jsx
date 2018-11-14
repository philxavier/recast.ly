class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {video: exampleVideoData[0]};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var video = e.target.innerText;
    var result;
    for (let i = 0; i < exampleVideoData.length; i++) {
      if (exampleVideoData[i].snippet.title === video) {
        result = i;
        break;
      }
    }
    this.setState({
      video: exampleVideoData[result]
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos = {exampleVideoData} handleClick = {this.handleClick}/> 
          </div>
        </div>
      </div>
    );
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
