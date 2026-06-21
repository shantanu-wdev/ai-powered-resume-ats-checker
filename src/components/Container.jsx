function Container({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`w-11/12 max-w-7xl ${className}`}>
      {children}
    </Tag>
  );
}

export default Container;
