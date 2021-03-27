import Button from './Button'

const Header = ({ title, onClick, showAddForm }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                text = {showAddForm ? 'Close' : 'Add'} 
                toggleAddForm={onClick} 
                />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task List'
}

export default Header