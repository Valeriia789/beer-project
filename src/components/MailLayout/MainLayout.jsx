import {MainContainer} from './MainLayout.styled'

import HomePageCardsList from '../HomePageCardsList/HomePageCardsList'
import {advertisingProducts} from '../../data/advertisingProducts'

const MainLayout = () => {
  return (
    <MainContainer>
      <HomePageCardsList advertisingProducts={advertisingProducts}></HomePageCardsList>
    </MainContainer>
  );
}

export default MainLayout;
