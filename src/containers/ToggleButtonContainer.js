import ToggleButton from '../components/common/ToggleButton';
import { useSelector } from 'react-redux';

const ToggleButtonContainer = () => {
  const { listStyle } = useSelector(
    ({ listStyle }) => ({
      listStyle: listStyle.setStyle,
    }),
  );

  return (<ToggleButton listStyle={listStyle}></ToggleButton>);
};

export default ToggleButtonContainer;