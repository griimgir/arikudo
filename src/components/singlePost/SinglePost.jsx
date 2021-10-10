import "./singlePost.css"
import pic from '../../assets/pics/cottage2.jpg'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                    src={pic} 
                    alt="" 
                    className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Ej</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed corrupti? Laudantium, harum blanditiis eos cupiditate, molestiae expedita beatae ex debitis eum reprehenderit assumenda earum eaque non dolorem itaque obcaecati.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed corrupti? Laudantium, harum blanditiis eos cupiditate, molestiae expedita beatae ex debitis eum reprehenderit assumenda earum eaque non dolorem itaque obcaecati.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed corrupti? Laudantium, harum blanditiis eos cupiditate, molestiae expedita beatae ex debitis eum reprehenderit assumenda earum eaque non dolorem itaque obcaecati.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed corrupti? Laudantium, harum blanditiis eos cupiditate, molestiae expedita beatae ex debitis eum reprehenderit assumenda earum eaque non dolorem itaque obcaecati.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed corrupti? Laudantium, harum blanditiis eos cupiditate, molestiae expedita beatae ex debitis eum reprehenderit assumenda earum eaque non dolorem itaque obcaecati.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed corrupti? Laudantium, harum blanditiis eos cupiditate, molestiae expedita beatae ex debitis eum reprehenderit assumenda earum eaque non dolorem itaque obcaecati.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed corrupti? Laudantium, harum blanditiis eos cupiditate, molestiae expedita beatae ex debitis eum reprehenderit assumenda earum eaque non dolorem itaque obcaecati.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed corrupti? Laudantium, harum blanditiis eos cupiditate, molestiae expedita beatae ex debitis eum reprehenderit assumenda earum eaque non dolorem itaque obcaecati.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed corrupti? Laudantium, harum blanditiis eos cupiditate, molestiae expedita beatae ex debitis eum reprehenderit assumenda earum eaque non dolorem itaque obcaecati.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed corrupti? Laudantium, harum blanditiis eos cupiditate, molestiae expedita beatae ex debitis eum reprehenderit assumenda earum eaque non dolorem itaque obcaecati.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed corrupti? Laudantium, harum blanditiis eos cupiditate, molestiae expedita beatae ex debitis eum reprehenderit assumenda earum eaque non dolorem itaque obcaecati.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed corrupti? Laudantium, harum blanditiis eos cupiditate, molestiae expedita beatae ex debitis eum reprehenderit assumenda earum eaque non dolorem itaque obcaecati.
                </p>
            </div>
        </div>
    )
}
