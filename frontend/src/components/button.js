import React from 'react';

function Button({
  label,
  onClick,
  type = 'button',
  style = {},
  disabled = false,
  variant = 'primary',
}) {
  const baseStyle = {
    margin: '10px',
    padding: '10px 20px',
    width: '450px',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    fontWeight: '800',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    ...style,
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#9D6E49',
      hover: '#724624',
    },
    accent: {
      backgroundColor: '#C49D81',
      hover: '#C6936E',
    },
  };

  const currentVariantStyle = variantStyles[variant];
  const buttonStyle = { ...baseStyle, backgroundColor: currentVariantStyle.backgroundColor };

  return (
    <button
      type={type}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      onMouseOver={(e) => (e.target.style.backgroundColor = currentVariantStyle.hover)}
      onMouseOut={(e) => (e.target.style.backgroundColor = currentVariantStyle.backgroundColor)}
    >
      {label}
    </button>
  );
}

export default Button;
