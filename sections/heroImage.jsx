import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Typist from 'react-typist';

const styles = {
  heroImageStyle: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    backgroundAttachment: 'fixed',
  },
  titleStyle: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    color: 'white',
    textShadow: '0px 4px 10px rgba(0, 0, 0, .3)',
  },
  mainTitleStyle: {
    fontSize: '4rem',
    color: '#b10000',
  },
};

class HeroImage extends Component {
  constructor(props) {
    super(props);
    this.height = null;
  }

  componentDidMount() {
    this.height = window.innerHeight;
  }

  render() {
    const { title } = this.props;
    return (
      <div
        id="home"
        className="basic-section hero-image"
        style={{
          ...styles.heroImageStyle,
          backgroundImage: `url('images/bg/crissxcross.png')`,
          backgroundColor: '#333',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <h1 style={styles.titleStyle}>
          <span className="colored-title" style={styles.mainTitleStyle}>{title}</span>
          <span style={{ visibility: 'hidden', fontSize: 0 }}>
            : Web Developer, CMS Developer, Mobile Developer
          </span>
        </h1>
        { this.props.location === 'home' && (
          <h2 style={{ ...styles.titleStyle, fontSize: '36px' }}>
            Web Developer
            {/* <Typist avgTypingDelay={100} stdTypdingDelay={50} cursor={{ blink: true }}>
              <Typist.Delay key="1" ms={650} />
              <span key="2">Web Devloper</span>
              <Typist.Backspace key="6" count={13} delay={1000} />
              <Typist.Delay key="7" ms={350} />
              <span key="8">Musician</span>
              <Typist.Backspace key="9" count={16} delay={700} />
              <Typist.Delay key="10" ms={300} />
              <span key="11">Writer</span>
              <Typist.Backspace key="15" count={7} delay={800} />
              <Typist.Delay key="16" ms={300} />
              <span key="17">Maker</span>
            </Typist> */}
          </h2>
        )}
      </div>
    );
  }
}

export default HeroImage;

HeroImage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.string,
};

HeroImage.defaultProps = {
  location: '',
};
