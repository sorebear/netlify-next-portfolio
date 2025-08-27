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
            <p>
              I am currently working as a Senior Fullstack Software Engineer at{' '}
              {textLink('Paramount', 'https://www.paramount.com')}.
            </p>
            <p>
              I work within the Media Ventures team, contirubting to sites like{' '}
              {textLink('Entertainment Tonight', 'https://www.etonline.com/')} and{' '}
              {textLink('Inside Edition', 'https://www.insideedition.com/')}.
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
