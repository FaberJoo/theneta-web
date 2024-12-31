import { AppShell as MantineAppShell } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PropTypes from 'prop-types';
import Header from './Header';
import Nav from './Nav';

export default function AppShell({ children }) {
  const isMobile = useMediaQuery('(max-width: 920px)');

  return (
    <MantineAppShell
      header={{
        flex: 0,
        height: 60,
      }}
      navbar={{
        flex: 1,
        width: 300,
        breakpoint: 920,
        collapsed: { mobile: isMobile },
      }}
      padding='md'
      layout='default'
      styles={{
        root: {
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
        },
        main: {
          flex: 1,
          marginLeft: isMobile ? 0 : '50px',
          marginTop: '60px',
          marginBottom: isMobile ? '60px' : 0,
          paddingLeft: isMobile ? 'md' : 0,
        },
      }}
    >
      <MantineAppShell.Header withBorder>
        <Header />
      </MantineAppShell.Header>

      <div style={{ display: 'flex', width: '100%' }}>
        <MantineAppShell.Navbar withBorder>
          <Nav />
        </MantineAppShell.Navbar>

        <MantineAppShell.Main>{children}</MantineAppShell.Main>
      </div>
    </MantineAppShell>
  );
}

AppShell.propTypes = {
  children: PropTypes.node.isRequired,
};
