class App extends React.Component {

  constructor(props) {
    
    super(props);

    this.state = { 
      video: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateList = this.updateList.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidMount() {
    searchYouTube({query: 'NBA', max: '5', key: window.YOUTUBE_API_KEY}, this.updateList);
  }

  updateList(list) {
    this.setState({
      videoList: list,
      video: list[0]
    });
  }

  handleClick(e) {
    var video = e.target.innerText;
    var result;
    for (let i = 0; i < this.state.videoList.length; i++) {
      if (this.state.videoList[i].snippet.title === video) {
        result = i;
        break;
      }
    }
    this.setState({
      video: this.state.videoList[result],
    });
  }


  onKeyPress(e) {
    var search = {max: '5', key: window.YOUTUBE_API_KEY};
    search.query = e.target.value;
    var handleSearch = _.debounce(searchYouTube, 500);
    handleSearch(search, this.updateList);
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onKeyPress = {this.onKeyPress} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.videoList} handleClick = {this.handleClick}/> 
          </div>
        </div>
      </div>
    );
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
