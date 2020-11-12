function AddForm() {
    return (
            <div className="column is-5 ml-5">
            <div className="box mt-6">
                <div className="content">

                    <div className="field">
                        <label className="label">Where to?</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-plane"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">When?</label>
                        <div className="control has-icons-left">
                            <input className="input" type="date"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-clock"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Notes:</label>
                        <div className="control">
                            <textarea className="textarea" type="text" >
                            </textarea>
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button">Add</button>
                        </div>
                        <div className="control">
                            <button className="button is-light">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default AddForm;
