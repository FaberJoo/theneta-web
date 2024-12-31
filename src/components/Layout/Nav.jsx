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

export default function Nav() {
  const isMobile = useMediaQuery('(max-width: 920px)');
  const iconSize = isMobile ? 35 : 40;

  return (
    <AppShell.Navbar
      p='md'
      style={{
        position: isMobile ? 'fixed' : 'sticky',
        bottom: isMobile ? 0 : 'auto',
        width: isMobile ? '100%' : '60px',
        height: isMobile ? '60px' : 'calc(100vh - 60px)', // 헤더 높이만큼 빼기
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        gap: isMobile ? '0' : '20px',
        alignItems: 'center',
        justifyContent: isMobile ? 'space-around' : 'flex-start',
        backgroundColor: 'white',
        borderTop: isMobile ? '1px solid #eee' : 'none',
        borderRight: isMobile ? '1px solid #eee' : 'none',
        marginTop: isMobile ? 'auto' : 15,
        zIndex: 1000,
        textDecoration: 'none',
      }}
    >
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
