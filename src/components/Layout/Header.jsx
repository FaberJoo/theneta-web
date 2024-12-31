import { AppShellHeader } from '@mantine/core';
import thenetaLogo from '../../assets/theneta.svg';
import { useMediaQuery } from '@mantine/hooks';
import './Header.css';

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 920px)');

  return (
    <AppShellHeader
      style={{
        height: '55px',
        border_bottom: '1px solid #eee',
        display: 'flex',
        align_items: 'center',
        padding: '0 12px',
        justifyContent: isMobile ? 'center' : 'normal',
      }}
    >
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
