import {useState} from 'react';

const AddTask = ({onAddTask}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!text.trim() || !day.trim()) {
            alert("Please add a task and a day");
            return;
        }
        onAddTask({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false);
    }

    return ( 
        <form className="add-form" onSubmit={handleSubmit}>
         <div className="form-control">
            <label>Task Name</label>
            <input type="text" name="text" placeholder="Enter Task Name" 
            value={text} 
            onChange={(e)=> setText(e.target.value)}/>
         </div>
         <div className="form-control">
            <label>Day & Time</label>
            <input type="text" name="text" placeholder="Add Day & Time"
            value={day}
            onChange={(e)=> setDay(e.target.value)}/>
         </div>
         <div className="form-control form-control-check">
            <label htmlFor="text">Set Reminder</label>
            <input type="checkbox"
            checked={reminder}
            onChange={(e)=> setReminder(e.currentTarget.checked)}/>
         </div>

         <input type="submit" value="Save Task" className="btn btn-primary btn-block"/>
        </form>
     );
}
 
export default AddTask;