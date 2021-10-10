import "./write.css"
import pic from "../../assets/pics/cottage2.jpg"

export default function Write() {
    return (
        <div className="write">
            <img 
                className="writeImg"
                src={pic}
                alt="" 
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-upload"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="Write down you birthday wish to Ari..." 
                        type="text" 
                        className="writeInput writeText" 
                        ></textarea>
                </div>
                <button className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    )
}
