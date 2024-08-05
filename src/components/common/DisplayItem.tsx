interface DisplayItemProps<T> {
  className?: string;
  item?: T;
}

const DisplayItem = <T extends React.ReactNode>(
  { className = '', item = undefined }: DisplayItemProps<T>,
) => {
  return (
    <div className={className}>
      {item}
    </div>
  );
};

export default DisplayItem;
