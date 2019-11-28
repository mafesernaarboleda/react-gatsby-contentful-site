import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';

const triangles = [
  {
    color: 'backgroundDark',
    height: ['35vh', '80vh'],
    width: ['95vw', '60vw'],
  },
  {
    color: 'secondary',
    height: ['38vh', '80vh'],
    width: ['50vw', '35vw'],
  },
  {
    color: 'primaryDark',
    height: ['25vh', '35vh'],
    width: ['75vw', '60vw'],
    invertX: true,
  },
  {
    color: 'backgroundDark',
    height: ['20vh', '20vh'],
    width: ['100vw', '100vw'],
    invertX: true,
    invertY: true,
  },
];

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home" triangles={triangles}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
          }
          allContentfulSocialLink {
            edges {
              node {
                id
                url
                name
                fontAwesomeIcon
              }
            }
          }
          site {
            siteMetadata {
              deterministicBehaviour
            }
          }
        }
      `}
      render={({ contentfulAbout, site, allContentfulSocialLink }) => {
        const { name, roles } = contentfulAbout;
        const { edges: socialLinks } = allContentfulSocialLink;
        const { deterministicBehaviour } = site.siteMetadata;

        return (
          <Fragment>
            <Heading
              textAlign="center"
              as="h1"
              color="primary"
              fontSize={[5, 6, 8]}
              mb={[3, 4, 5]}
            >
              {`Hello, I'm ${name}!`}
            </Heading>

            <Heading
              as="h2"
              color="primary"
              fontSize={[4, 5, 6]}
              mb={[3, 5]}
              textAlign="center"
              style={centerHorizontally}
            >
              <TextLoop interval={5000}>
                {roles
                  .sort(() => deterministicBehaviour || Math.random() - 0.5)
                  .map(text => (
                    <Text width={[300, 500]} key={text}>
                      {text}
                    </Text>
                  ))}
              </TextLoop>
            </Heading>

            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ node }) => {
                const { id } = { ...node };
                return (
                  <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                    <SocialLink {...node} />
                  </Box>
                );
              })}
            </Flex>
            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
