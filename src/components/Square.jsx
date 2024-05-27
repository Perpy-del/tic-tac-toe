const Square = ({ value, onSquareClick }) => {
  return (
    <button
      style={{
        padding: '20px',
        border: '1px solid black',
        fontSize: '20px',
        fontWeight: 'bold',
        width: '80px',
        height: '80px',
        cursor: 'pointer',
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
