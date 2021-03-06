import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

// Re-usable header for dashboard, settings, etc.
export default class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <Navbar>
        <Link href="/">
          <a>Twitch-Stocks</a>
        </Link>
        <Link href="/">
          <a>Logout</a>
        </Link>
      </Navbar>
    );
  }
}
