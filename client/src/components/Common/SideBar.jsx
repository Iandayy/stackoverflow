// eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import currentTapState from '../../state/currentTapState';

const SideMenu = styled.aside`
  display: flex;
  flex-direction: column;
  width: 216px;
  height: 100%;
  padding-top: 24px;
  margin-bottom: 8px;
  background-color: #ffffff;
  color: rgba(73, 73, 73, 0.5);
  font-weight: 400;
  border-right: 1px solid #d6d9dc;
  list-style: none;
`;

const MenuLink = styled(Link)`
  display: block;
  width: 216px;
  padding: 8px;
  text-decoration-line: none;
  border-right: ${(props) =>
    props.focused === 'focused' ? '4px solid #f48225' : 'transparent'};
  color: ${(props) =>
    props.focused === 'focused' ? 'black' : 'rgba(69, 69, 69, 0.7)'};
  background-color: ${(props) =>
    props.focused === 'focused' ? '#f3f3f3' : 'transparent'};
  font-weight: ${(props) => (props.focused === 'focused' ? '700' : '400')};
  transition: ${(props) => (props.focused === 'focused' ? '0.5s' : '0s')};
`;

const SideBar = () => {
  const [currentTab, setCurrentTab] = useRecoilState(currentTapState);

  const menuArr = [
    { name: 'Home', path: '/' },
    { name: 'Questions', path: '/questions' },
    { name: 'Tags', path: '/tags' },
    { name: 'Users', path: '/users' },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <SideMenu>
      {menuArr.map((el, index) => (
        <MenuLink
          key={index}
          onClick={() => selectMenuHandler(index)}
          to={el.path}
          className={currentTab === index ? 'public focused' : 'public'}
          focused={currentTab === index ? 'focused' : null}
        >
          {el.name}
        </MenuLink>
      ))}
    </SideMenu>
  );
};

export default SideBar;
