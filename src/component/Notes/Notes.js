import React from "react"
import "../../assets/styles.css";;

const Notes = () =>{
    return(
        <div className="notes">
            <p>This Is Notes Page</p>
            <p>Structure might change afterwards</p>
            <input type="textarea" className="note-section"/>
            <button>Save</button>
            <button>Edit</button>
            <button>Share</button>
        </div>
    )
}
export default Notes;
