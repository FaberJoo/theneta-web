export const appShellStyles = (isMobile) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    marginLeft: isMobile ? 0 : '50px',
    marginTop: '60px',
    marginBottom: isMobile ? '60px' : 0,
    paddingLeft: isMobile ? 'md' : 0,
  },
});

export const headerStyles = () => ({
  flex: 0,
  height: 60,
});

export const navStyles = (isMobile) => ({
  flex: 1,
  width: 300,
  breakpoint: 920,
  collapsed: { mobile: isMobile },
});
