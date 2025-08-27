import React from 'react';
import PropTypes from 'prop-types';

import SectionTitle from '../components/sectionTitle';
import StitchRows from '../components/stitchRows';

const styles = {
  mainWorkStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  contentWrapperStyle: {
    display: 'flex',
    flexDirection: 'row',
    zIndex: 10,
  },
  logoContainerStyle: {
    minWidth: '50%',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  workSectionTitleStyle: {
    position: 'absolute',
    top: '8.7rem',
    transform: 'translateY(-50%)',
  },
  anchorStyle: {
    // width: '75%',
    margin: 0,
  },
  logoStyle: {
    width: '100%',
    maxWidth: '300px',
  },
  enviventLogoStyle: {
    width: '100%',
    maxWidth: '400px',
    display: 'block',
    margin: '0 auto',
  },
  textContainerStyle: {
    padding: '0 2rem',
    minWidth: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const MainWork = ({ activeSet, angledLineHeight }) => {
  const rotate = activeSet === 'web-development' ? -5 : 5;

  const textLink = (text, href) => (
    <a href={href} className="underline" rel="noopener noreferrer" target="_blank">
      {text}
    </a>
  );

  return (
    <div className="work__main-work-wrapper" style={styles.mainWorkStyle}>
      <SectionTitle style={styles.workSectionTitleStyle}>Professional Experience</SectionTitle>
      <StitchRows
        rows={[3, 4]}
        section="work"
        set={activeSet}
        columnHeights={['18.85rem', '18.85rem']}
        setArr={['mobile-development', 'cms-development', 'web-development']}
        angledLineHeight={angledLineHeight}
        rotate={rotate}
      >
        <div style={styles.contentWrapperStyle} className="work__main-work-1">
          <div style={styles.logoContainerStyle}>
            <a
              href="https://www.paramount.com/"
              className="work__cbs-link"
              rel="noopener noreferrer"
              target="_blank"
              style={styles.anchorStyle}
            >
              <img
                src="images/work/paramount-logo.png"
                style={styles.logoStyle}
                alt="CBS Interactive"
              />
            </a>
          </div>
          <div style={styles.textContainerStyle}>
            <h3 style={{ textAlign: 'center' }}>2020 - Present</h3>
            <p>
              I currently work as a Senior Fullstack Software Engineer at{' '}
              {textLink('Paramount', 'https://www.paramount.com')}.
            </p>
            <p>
              I work on the CBS Digital team, supporting {textLink('CBS.com', 'https://www.cbs.com')}.
            </p>
            <p>
              Previously, I worked with the Media Ventures team, contirubting to sites like{' '}
              {textLink('Entertainment Tonight', 'https://www.etonline.com/')},{' '}
              {textLink('Inside Edition', 'https://www.insideedition.com/')}, and{' '}
              {textLink('The Drew Barrymore Show', 'https://www.thedrewbarrymoreshow.com/')}.
              On my new team, we still support these sites, though they're no longer under active development.
            </p>
          </div>
        </div>
        <div style={styles.contentWrapperStyle} className="work__main-work-2">
          <div style={styles.textContainerStyle}>
            <h3 style={{ textAlign: 'center' }}>2019 - 2020</h3>
            <p>
              Previously, I was a Senior Web Developer at 360 BC Group, a parent corporation for
              three B2B companies: 360Biz, 360Civic, and {textLink('360Circuits', 'https://360circuits.com')}.
            </p>
            <p>
              I worked primarily with 360Civic building
              large websites with custom functionality for public sector entities (school districts,
              cities, counties, utilities).
            </p>
          </div>
          <div style={styles.logoContainerStyle}>
            <a
              href="https://www.360bcgroup.com/"
              className="work__360bc-group-link"
              rel="noopener noreferrer"
              target="_blank"
              style={styles.anchorStyle}
            >
              <img
                src="/images/work/360logo.png"
                style={{ ...styles.logoStyle, paddingRight: '44px' }}
                alt="360 BC Group Logo"
              />
            </a>
          </div>
        </div>
        <div style={styles.contentWrapperStyle} className="work__main-work-1">
          <div style={styles.logoContainerStyle}>
            <a
              href="https://envivent.com"
              className="work__envivent-link"
              rel="noopener noreferrer"
              target="_blank"
              style={{ width: '100%' }}
            >
              <img
                src="/images/work/envivent.svg"
                style={styles.logoStyle}
                alt="Envivent Web Development"
              />
            </a>
          </div>
          <div style={styles.textContainerStyle}>
            <h3 style={{ textAlign: 'center' }}>2017 - 2019</h3>
            <p>
              Before that, I worked at {textLink('Envivent', 'https://envivent.com')} as a Web
              Developer. We worked primarily with healthcare ad agencies, acting as their
              development partner.
            </p>
          </div>
        </div>
      </StitchRows>
    </div>
  );
};

export default MainWork;

MainWork.propTypes = {
  activeSet: PropTypes.string.isRequired,
  angledLineHeight: PropTypes.number.isRequired,
};
