import { ActionIcon, AppShellHeader, Group } from '@mantine/core';
import thenetaLogo from '../../assets/theneta.svg';
import { useMediaQuery } from '@mantine/hooks';
import { IconBell, IconMenu2 } from '@tabler/icons-react';
import { headerStyles, menuStyles } from './Header.styles';

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 920px)');
  const iconStyle = {
    backgroundColor: 'white',
    border: 'none',
  };

  return (
    <AppShellHeader style={headerStyles(isMobile)}>
      <img
        className='logo'
        src={thenetaLogo}
        alt='Theneta'
        width={40}
        height={40}
        style={{ marginLeft: isMobile ? -24 : 0 }}
      />

      <Group style={menuStyles()}>
        <ActionIcon
          variant='subtle'
          size={40}
          aria-label='notifications'
          style={iconStyle}
        >
          <IconBell size={36} />
        </ActionIcon>
        <ActionIcon
          variant='subtle'
          size={40}
          aria-label='menu'
          style={iconStyle}
        >
          <IconMenu2 size={36} />
        </ActionIcon>
      </Group>
    </AppShellHeader>
  );
}
