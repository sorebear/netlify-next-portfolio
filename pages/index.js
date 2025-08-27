import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

// React Components
import HeroImage from '../sections/heroImage';
import Skills from '../sections/skills';
import About from '../sections/about';
import Work from '../sections/work';
import Resources from '../sections/resources';
import Contact from '../sections/contact';
import Footer from '../sections/footer';

import TopBar from '../components/topBar';
import SectionTitle from '../components/sectionTitle';
import BasicSection from '../components/basicSection';

// Variables
const darkGradient = 'linear-gradient(rgba(25, 25, 25, .8), rgba(25, 25, 25, .6))';

function Index() {
  const [activeSet, setActiveSet] = useState('web-development');
  const [activeIndex, setActiveIndex] = useState(0);
  const [angledLineHeight, setAngledLineHeight] = useState(1920 * Math.tan(5 * (Math.PI / 180)));
  const contentRef = useRef();

  useEffect(() => {
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  function updateWindowWidth() {
    if (contentRef.current) {
      setAngledLineHeight(contentRef.current.offsetWidth * Math.tan(5 * (Math.PI / 180)));
    }
  }

  function updateActiveSet(newSet, section, newIndex) {
    setActiveSet(newSet);
    setActiveIndex(newIndex);
  }

  return (
    <div className={`content-wrapper ${activeSet}-active`}>
      <Head>
        <meta property="og:title" content="JAMstack Resources | Soren Baird" />
        <title>Soren Baird | Senior Fullstack Software Engineer</title>
        <meta
          property="og:title"
          content="Soren Baird | Senior Fullstack Software Engineer"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/sorebear/image/upload/v1544489724/portfolio/home.png"
        />
        <meta property="og:url" content="https://sorenbaird.com" />
        <meta
          property="og:description"
          content="I am a Senior Full Stack Web Developer living and coding in Nashville, TN."
        />
      </Head>
      <TopBar location="home" />
      <HeroImage location="home" title="Soren Baird" />
      <BasicSection
        id="about"
        className="about"
        style={{ backgroundImage: `${darkGradient}, url('images/bg/about-me-2.jpg')` }}
      >
        <About />
      </BasicSection>
      <BasicSection id="skills" className="skills" style={{ paddingBottom: 0 }}>
        <SectionTitle id="skills-title" className="">
          Skills
        </SectionTitle>
        <Skills
          activeSkillSet={activeSet}
          activeIndex={activeIndex}
          angledLineHeight={angledLineHeight}
          updateActiveSet={updateActiveSet}
        />
      </BasicSection>
      <BasicSection
        id="resources"
        className="resources"
        style={{
          backgroundImage: `url('images/bg/crissxcross.png')`,
          backgroundColor: '#333',
          backgroundSize: 'initial',
        }}
      >
        <SectionTitle className="colored-title" style={{ color: 'white' }}>
          Resources
        </SectionTitle>
        <Resources />
      </BasicSection>
      <BasicSection id="work" className="work" style={{ padding: 0 }}>
        <Work
          activeSet={activeSet}
          activeIndex={activeIndex}
          angledLineHeight={angledLineHeight}
          updateActiveSet={updateActiveSet}
        />
      </BasicSection>
      {/* <BasicSection
        id="connect"
        className="contact"
        style={{
          backgroundImage: `url('images/bg/crissxcross.png')`,
          backgroundColor: '#333',
          backgroundSize: 'initial',
        }}
      >
        <SectionTitle style={{ color: 'white' }} className="colored-title">
          Connect
        </SectionTitle>
        <Contact />
      </BasicSection> */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default Index;
