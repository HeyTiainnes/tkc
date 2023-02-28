import React from "react";

const NewTask = () => {
    return (
        <>

            <div className="container">
                <form>
                    <label htmlFor="designation">
                        Designation<span className="required">*</span>
                    </label>
                    <input type="text" id="designation" name="designation" required />

                    <label htmlFor="deadline">Deadline</label>
                    <input type="datetime-local" id="deadline" name="deadline" />

                    <label htmlFor="duration">Duration</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        placeholder="eg. 2d 3h 30m"
                    />

                    <label htmlFor="startdate">Start Date</label>
                    <input type="datetime-local" id="startdate" name="startdate" />

                    <label htmlFor="notes">Notes (255 characters max)</label>
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
