import { AppShell as MantineAppShell } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PropTypes from 'prop-types';
import Header from './Header';
import Nav from './Nav';
import { getAppShellStyles } from './AppShell.styles';

export default function AppShell({ children }) {
  const isMobile = useMediaQuery('(max-width: 920px)');
  const styles = getAppShellStyles(isMobile);

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
      styles={styles}
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
