import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Talk from '../components/Talk';

const triangles = [
  {
    color: 'backgroundDark',
    height: ['15vh', '10vh'],
    width: ['100vw', '100vw'],
    invertX: true,
  },
  {
    color: 'secondary',
    height: ['50vh', '40vh'],
    width: ['70vw', '40vw'],
    invertY: true,
  },
  {
    color: 'primaryDark',
    height: ['40vh', '15vh'],
    width: ['100vw', '100vw'],
    invertX: true,
    invertY: true,
  },
];

const Talks = () => (
  <Section.Container id="talks" triangles={triangles}>
    <StaticQuery
      query={graphql`
        query SlidesQuery {
          allInternalslides(filter: { id: { ne: "dummy" } }) {
            edges {
              node {
                id
                url
                imageUrl
                name
                createdAt
                description
              }
            }
          }
        }
      `}
      render={({ allInternalslides }) => {
        const { edges: slides } = allInternalslides;
        return (
          <Fragment>
            <Section.Header name="Talks" icon="👩🏻‍🏫" label="talks" />
            <CardContainer minWidth="289px">
              {slides.map(({ node }) => {
                const { id } = { ...node };
                return (
                  <Fade bottom key={id}>
                    <Talk {...node} key={id} />
                  </Fade>
                );
              })}
            </CardContainer>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default Talks;
