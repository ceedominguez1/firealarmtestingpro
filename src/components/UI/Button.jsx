import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  to 
}) => {
  const baseStyles = {
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--radius-md)',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      border: '2px solid var(--color-primary)',
    },
    secondary: {
      backgroundColor: 'var(--color-secondary)',
      color: 'white',
      border: '2px solid var(--color-secondary)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      border: '2px solid var(--color-primary)',
    },
    white: {
      backgroundColor: 'white',
      color: 'var(--color-primary)',
      border: '2px solid white',
    }
  };

  const style = { ...baseStyles, ...variants[variant] };

  // Helper for hover effects (handled via CSS in a real styled solution, 
  // but for inline style simplicity we rely on index.css or just simple opacity/transform logic if needed.
  // Ideally, we'd use classNames for hover, but standard CSS is preferred)
  
  // To keep it simple with vanilla CSS, we can return a button with a class.
  // But let's assume we use the classes from index.css or just style attribute for dynamic props.
  // Actually, let's use a class approach for the variants to handle hover states better in CSS?
  // Or just inline styles for now and assume the "active" state is handled by the user interactions.
  // The prompt asked for "Vanilla CSS".
  
  return (
    <button 
      className={`btn-${variant} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
