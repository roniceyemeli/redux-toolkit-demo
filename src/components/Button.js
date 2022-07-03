const Button = ({ onClick, children }) => {
    return (
      <button className="bg-violet-500 text-white py-2 px-6 my-10 rounded hover:bg-violet-700 flex gap-2"
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
  
  export default Button