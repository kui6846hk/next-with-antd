import './CustomButton.css';

const CustomButton = () => {
    
    let count = 0;

    function customClick(){
        count += 1;
        alert('You clicked me.' + count)
        console.log('You clicked me.'+ count)
    }

    return (
        <input type="button" value="Click me" onClick={customClick}/>
    )

}

export default CustomButton;