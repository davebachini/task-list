const Button = ({toggleAddForm, text}) => {
    return <button className='btn' onClick={toggleAddForm}>{text}</button>
}

export default Button