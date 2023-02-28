import React from "react";
import './NewTask.css';


const NewTask = () => {
    return (
        <>

            <div className="container">
                <form>
                    <label htmlFor="designation">
                        Designation<span className="required">*</span>
                    </label><br></br>
                    <input type="text" id="designation" name="designation" required /><br></br>

                    <label htmlFor="deadline">Deadline</label><br></br>
                    <input type="datetime-local" id="deadline" name="deadline" /><br></br>

                    <label htmlFor="duration">Duration</label><br></br>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        placeholder="eg. 2d 3h 30m"
                    /><br></br>

                    <label htmlFor="startdate">Start Date</label><br></br>
                    <input type="datetime-local" id="startdate" name="startdate" /><br></br>

                    <label htmlFor="notes">Notes (255 characters max)</label><br></br>
                    <textarea id="notes" name="notes" maxLength={255}></textarea>

                    <div className="buttons">
                        <button type="reset" id="cancel">
                            Cancel
                        </button>
                        <button type="submit" id="submit">
                            Validate
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default NewTask;
