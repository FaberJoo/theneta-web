export const getHeaderStyles = (isMobile) => ({
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
