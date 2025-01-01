export const headerStyles = (isMobile) => ({
  height: '55px',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  display: 'flex',
  padding: '0 12px',
  justifyContent: isMobile ? 'center' : 'normal',
  borderBottom: '1px solid #eee',
  alignItems: 'center',
});

export const menuStyles = () => ({
  display: 'flex',
  position: 'fixed',
  right: '16px',
  marginLeft: 'auto',
  alignItems: 'center',
  gap: '10px',
});

export const iconStyle = {
  backgroundColor: 'white',
  border: 'none',
  cursor: 'pointer',
};
