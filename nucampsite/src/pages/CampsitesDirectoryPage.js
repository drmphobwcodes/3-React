import { Container, Row, Col, Button } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById, selectRandomCampsite } from '../features/campsites/campsitesSlice';
import React,{ useState } from 'react';
import SubHeader from '../components/SubHeader';



const CampsitesDirectoryPage = () => {

  return (
    <Container>
      <SubHeader current="Campsites Directory" />
        <CampsitesList />
    </Container>
  );
};
export default CampsitesDirectoryPage;