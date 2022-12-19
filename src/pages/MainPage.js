import Category from '../components/Category/Category';
import ChatBot from '../components/ChatBot/ChatBot';
import Responsive from '../components/common/Responsive';
import Header from '../components/Header/Header';
import PillListContainer from '../containers/Pill/PillListContainer';
import ToggleButtonContainer from '../containers/ToggleButtonContainer';

const MainPage = () => {
  return (
    <Responsive>
      <Header />
      <Category />
      <ToggleButtonContainer />
      <PillListContainer />
      <ChatBot />
    </Responsive>
  );
};

export default MainPage;
