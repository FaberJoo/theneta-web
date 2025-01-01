export const getNavStyles = (isMobile) => ({
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
});
