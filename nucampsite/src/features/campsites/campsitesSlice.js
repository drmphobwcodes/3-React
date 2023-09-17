import {CAMPSITES} from '../../../shared/campsites';

const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectRandowmCampsites = () => {
    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
}