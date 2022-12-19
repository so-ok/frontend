import Category from '../components/Category/Category';
import ChatBot from '../components/ChatBot/ChatBot';
import Header from '../components/ChatBot/Header/Header';
import Responsive from '../components/common/Responsive';
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
