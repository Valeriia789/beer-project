import Header from '../src/components/Header/Header';
import HomePageCardsList from './components/HomePageCardsList/HomePageCardsList'
import {advertisingProducts} from './data/advertisingProducts'

import {StyledContainer} from './App.styled'

function App() {
  return (
    <StyledContainer>
      <Header></Header>
      <HomePageCardsList advertisingProducts={advertisingProducts}></HomePageCardsList>
    </StyledContainer>
  );
}

export default App;
