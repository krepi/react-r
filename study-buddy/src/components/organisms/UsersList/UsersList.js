import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 25%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.3);
`;
const UserList = () => (
  <Wrapper>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </Wrapper>
);

UserList.propTypes = {};

export default UserList;
