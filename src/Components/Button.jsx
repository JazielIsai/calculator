
function Button( { numero, handleClick  } ) {
  


    return (
        <button 
            className = "btn-num" 
            onClick = {  handleClick }
            value = { numero }
        >
            { numero }
        </button>
    );
}

export default Button;
