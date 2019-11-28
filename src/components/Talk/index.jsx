import React from 'react';
import styled from 'styled-components';
import { Heading } from 'rebass';
import PropTypes from 'prop-types';
import { Card } from '../Card';
import ImageSubtitle from '../ImageSubtitle';

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const FormatDate = date => new Date(date);

const Talk = ({ name, imageUrl, url, createdAt }) => (
  <Card
    onClick={() => window.open('https://slides.com' + url, '_blank')}
    pb={4}
  >
    <EllipsisHeading m={2} p={1}>
      {name}
    </EllipsisHeading>
    {imageUrl && <CoverImage src={imageUrl} height="200px" alt={name} />}
    <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
      {FormatDate(createdAt)
        .toDateString()
        .slice(3)}
    </ImageSubtitle>
  </Card>
);

Talk.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Talk;
