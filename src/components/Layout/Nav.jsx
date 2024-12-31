import { AppShell, NavLink } from '@mantine/core';
import { Link } from 'react-router-dom';
import {
  IconHome,
  IconUser,
  IconSend,
  IconSearch,
  IconSquareRoundedPlus,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { getNavStyles } from './Nav.styles';

export default function Nav() {
  const isMobile = useMediaQuery('(max-width: 920px)');
  const styles = getNavStyles(isMobile);
  const iconSize = isMobile ? 35 : 40;

  return (
    <AppShell.Navbar p='md' style={styles}>
      <NavLink
        component={Link}
        to='/'
        leftSection={<IconHome size={iconSize} color='black' />}
      />
      <NavLink
        component={Link}
        to='/explore'
        leftSection={<IconSearch size={iconSize} color='black' />}
      />
      {/* 모달로 변경하기 */}
      <NavLink
        component={Link}
        to='/explore'
        leftSection={<IconSquareRoundedPlus size={iconSize} color='black' />}
      />
      <NavLink
        component={Link}
        to='/notifications'
        leftSection={<IconSend size={iconSize} color='black' />}
      />
      <NavLink
        component={Link}
        to='/profile'
        leftSection={<IconUser size={iconSize} color='black' />}
      />
    </AppShell.Navbar>
  );
}
