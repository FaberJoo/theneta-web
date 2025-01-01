import { AppShell as MantineAppShell } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { appShellStyles, headerStyles, navStyles } from './AppShell.styles';
import PropTypes from 'prop-types';
import Header from './Header';
import Nav from './Nav';

export default function AppShell({ children }) {
  const isMobile = useMediaQuery('(max-width: 920px)');

  return (
    <MantineAppShell
      header={headerStyles(isMobile)}
      navbar={navStyles(isMobile)}
      padding='md'
      layout='default'
      styles={appShellStyles(isMobile)}
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
