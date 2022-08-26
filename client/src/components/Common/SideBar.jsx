// eslint-disable-line no-unused-vars

import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

import currentTapState from '../../state/currentTapState';

import styled from 'styled-components';

const SideMenu = styled.aside`
  font-weight: 400;
  border: 1px solid rgba(223, 223, 223, 0.5);
  color: rgba(73, 73, 73, 0.5);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 150px;
  height: 100vh;
  padding: 10px;
  padding-top: 30px;
  margin-bottom: 7rem;
`;

const Menu = styled.section`
  color: rgba(73, 73, 73, 0.5);
  padding: 5px;

  .public {
    text-decoration-line: none;
    padding: 2px;
  }
  .public:visited {
    font-weight: 600;
    color: rgba(73, 73, 73, 0.5);
  }
  .focused {
    font-weight: 700;
    background-color: #f3f3f3;
    transition: 0.3s;
  }
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
        <Menu key={index} onClick={() => selectMenuHandler(index)}>
          {
            <Link
              to={el.path}
              className={currentTab === index ? 'public focused' : 'public'}
            >
              {el.name}
            </Link>
          }
        </Menu>
      ))}
    </SideMenu>
  );
};

export default SideBar;
