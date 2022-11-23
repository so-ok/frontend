import React from 'react';
import tw from 'tailwind-styled-components';

import loading from '../../assets/Images/loading.png';

const Container = tw.section`flex justify-center items-center`;

const GrowLoading = tw.img`animate-spin w-10 h-10`;

const Loading = () => (
  <Container aria-label='로딩중'>
    <GrowLoading src={loading} alt='Loading'></GrowLoading>
  </Container>
);

export default Loading;
