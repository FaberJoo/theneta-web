import { AppShell as MantineAppShell, Drawer } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import PropTypes from 'prop-types';
import Header from './Header';
import Nav from './Nav';
import { appShellStyles } from './AppShell.styles';

export default function AppShell({ children }) {
  const isMobile = useMediaQuery('(max-width: 920px)');
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <MantineAppShell styles={appShellStyles(isMobile)}>
        <Header onOpenDrawer={open} />
        <Nav />
        <MantineAppShell.Main>{children}</MantineAppShell.Main>
      </MantineAppShell>

      <Drawer.Root
        opened={opened}
        onClose={close}
        position='right'
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 1001,
          backgroundColor: 'white',
        }}
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}

AppShell.propTypes = {
  children: PropTypes.node.isRequired,
};
