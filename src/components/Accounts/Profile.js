import tw from 'tailwind-styled-components';
import { Back } from '../common/SvgImport';
import { useNavigate } from 'react-router-dom';

const Container = tw.div`flex flex-col mt-10 p-6 shadow-md items-center w-11/12 h-3/6 mx-auto rounded-xl gap-6 bg-white`;

const UserInfoContainer = tw.div`flex flex-row w-full justify-around`;

const ProfileImage = tw.img`rounded-full w-32 h-32`;

const UserInfo = tw.div`flex flex-col w-6/12 mt-3`;

const BackButton = tw.div`w-full`;

const Info = tw.p`font-bold`;

const Profile = ({ image, email, username }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)} className={'left-0'}>
        <Back props={'w-8 h-8'} color={'#f43f5e'} />
      </BackButton>
      <UserInfoContainer>
        <ProfileImage src={image} />
        <UserInfo>
          <Info>Name: {username}</Info>
          <Info>Email: {email}</Info>
        </UserInfo>
      </UserInfoContainer>
    </Container>
  );
};

export default Profile;