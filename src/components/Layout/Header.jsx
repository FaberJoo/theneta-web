import { AppShellHeader } from '@mantine/core';
import thenetaLogo from '../../assets/theneta.svg';
import { useMediaQuery } from '@mantine/hooks';
import { getHeaderStyles } from './Header.styles';

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
    </AppShellHeader>
  );
}
