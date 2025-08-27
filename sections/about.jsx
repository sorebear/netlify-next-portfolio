import React from 'react';

const styles = {
  aboutMeStyle: {
    width: '60%',
    marginLeft: 'auto',
  },
  titleStyle: {
    color: 'white',
    display: 'inline-block',
  },
  textStyle: {
    color: 'white',
  },
};

export default () => (
  <div style={styles.aboutMeStyle}>
    <h2 style={styles.titleStyle}>
      Hi, I&apos;m Soren.
    </h2>
    <p style={styles.textStyle}>
      Lead-oriented Fullstack Engineer with 8 years of experience building and scaling customer-facing web applications, including 5+ years on high-traffic sites with millions of monthly visitors. 
    </p>
    <p style={styles.textStyle}>
      Proven record of leading migrations, mentoring developers, and coordinating cross-team initiatives. Combines deep React/Next.js expertise with prior experience managing direct reports to deliver both technical excellence and team growth.
    </p>
  </div>
);
