import "./InputSearch.css";

function showText(e){
  console.log(e.target.value)   
}

const InputSearch = function (){
    return (
        <div className='Input_search'>
            <input className="input_style" type="text" onChange={showText} />
            
        </div>
    )
};

export default InputSearch;