import { ActionIcon, AppShellHeader, Group } from '@mantine/core';
import thenetaLogo from '../../assets/theneta.svg';
import { useMediaQuery } from '@mantine/hooks';
import { getHeaderStyles } from './Header.styles';
import { IconBell, IconMenu2 } from '@tabler/icons-react';

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 920px)');
  const styles = getHeaderStyles(isMobile);

  return (
    <AppShellHeader style={styles}>
      <img
        className='logo'
        src={thenetaLogo}
        alt='Theneta'
        width={40}
        height={40}
      />

      <Group gap='sm'>
        <ActionIcon variant='subtle' size={34} aria-label='notifications'>
          <IconBell size={24} />
        </ActionIcon>
        <ActionIcon variant='subtle' size={34} aria-label='menu'>
          <IconMenu2 size={24} />
        </ActionIcon>
      </Group>
    </AppShellHeader>
  );
}
