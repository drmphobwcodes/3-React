import { Container, Row, Col, Button } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById, selectRandomCampsite } from '../features/campsites/campsitesSlice';
import React,{ useState } from 'react';



const CampsitesDirectoryPage = () => {

  return (
    <Container>
        <CampsitesList />
    </Container>
  );
};
export default CampsitesDirectoryPage;