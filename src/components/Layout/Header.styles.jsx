export const getHeaderStyles = (isMobile) => ({
  height: '55px',
  display: 'flex',
  padding: '0 12px',
  justifyContent: isMobile ? 'center' : 'normal',
  borderBottom: '1px solid #eee',
  alignItems: 'center',
});
