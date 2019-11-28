import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Job from '../components/Job';

const triangles = [
  {
    color: 'secondaryLight',
    height: ['80vh', '80vh'],
    width: ['100vw', '100vw'],
    invertX: true,
  },
  {
    color: 'background',
    height: ['50vh', '20vh'],
    width: ['50vw', '50vw'],
    invertX: true,
  },
  {
    color: 'primaryDark',
    height: ['25vh', '40vh'],
    width: ['75vw', '60vw'],
    invertX: true,
    invertY: true,
  },
  {
    color: 'backgroundDark',
    height: ['25vh', '20vh'],
    width: ['100vw', '100vw'],
    invertY: true,
  },
];

const Jobs = () => (
  <Section.Container id="jobs" triangles={triangles}>
    <Section.Header name="Jobs" icon="💻" label="notebook" />
    <StaticQuery
      query={graphql`
        query JobsQuery {
          allContentfulJobs(sort: { fields: createdAt }) {
            edges {
              node {
                id
                name
                description
                projectUrl
                publishedDate(formatString: "YYYY")
                type
                logo {
                  title
                  image: resize(width: 200, quality: 100) {
                    src
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulJobs }) => (
        <CardContainer minWidth="350px">
          {allContentfulJobs.edges.map(({ node }, i) => {
            const { id } = { ...node };
            return (
              <Fade bottom delay={i * 200} key={id}>
                <Job {...node} />
              </Fade>
            );
          })}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Jobs;
