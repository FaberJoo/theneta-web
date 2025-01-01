import { ActionIcon, AppShellHeader, Group } from '@mantine/core';
import thenetaLogo from '../../assets/theneta.svg';
import { useMediaQuery } from '@mantine/hooks';
import { IconBell, IconMenu2 } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { headerStyles, menuStyles, iconStyle } from './Header.styles';

export default function Header({ onOpenDrawer }) {
  const isMobile = useMediaQuery('(max-width: 920px)');

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
          onClick={onOpenDrawer}
        >
          <IconMenu2 size={36} />
        </ActionIcon>
      </Group>
    </AppShellHeader>
  );
}

Header.propTypes = {
  onOpenDrawer: PropTypes.func.isRequired,
};
