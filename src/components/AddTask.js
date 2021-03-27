import PropTypes from 'prop-types'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addTask = (e) => {
        e.preventDefault();

        if(!title) {
            alert('Please fill out the fields before clicking the Save Task button.');
            return;
        }

        onAdd({title, description});
        
        setTitle('');
        setDescription('');
    }

    return (
        <form className="add-form" onSubmit={addTask}>
            <div className='form-control'>
                <label>Task Title</label>
                <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className='form-control'>
                <label>Description</label>
                <input type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

AddTask.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default AddTask