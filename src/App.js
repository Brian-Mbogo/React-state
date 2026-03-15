import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'John Doe',
        bio: 'A software developer passionate about React and modern web technologies.',
        imgSrc: process.env.PUBLIC_URL + '/person-profile.svg',
        profession: 'Software Developer'
      },
      shows: false,
      timeInterval: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.intervalId = null;
    this.mountedAt = null;
  }

  toggleShow() {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  }

  componentDidMount() {
    this.mountedAt = Date.now();
    this.intervalId = setInterval(() => {
      this.setState({
        timeInterval: Math.floor((Date.now() - this.mountedAt) / 1000)
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { Person, shows, timeInterval } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Person Profile</h1>
          <p>Time since component mounted: {timeInterval} seconds</p>
          <button onClick={this.toggleShow}>
            {shows ? 'Hide' : 'Show'} Profile
          </button>
          {shows && (
            <div className="profile">
              <img src={Person.imgSrc} alt={Person.fullName} className="profile-img" />
              <h2>{Person.fullName}</h2>
              <p><strong>Profession:</strong> {Person.profession}</p>
              <p>{Person.bio}</p>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
