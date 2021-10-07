import "./post.css"
// import postsPic from './cottage.jpg'

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                // src={postsPic}
                src="https://cdn.discordapp.com/attachments/371025538162360320/894731626683174963/PXL_20211004_2342401062.jpg"
                alt="" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCats">Entree 1</span>
                    <span className="postCats">Entree 2</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet 
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt dignissimos commodi veniam unde! Commodi, modi fugiat quibusdam porro nobis nulla vel hic, adipisci saepe tenetur possimus accusamus perferendis quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt dignissimos commodi veniam unde! Commodi, modi fugiat quibusdam porro nobis nulla vel hic, adipisci saepe tenetur possimus accusamus perferendis quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt dignissimos commodi veniam unde! Commodi, modi fugiat quibusdam porro nobis nulla vel hic, adipisci saepe tenetur possimus accusamus perferendis quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt dignissimos commodi veniam unde! Commodi, modi fugiat quibusdam porro nobis nulla vel hic, adipisci saepe tenetur possimus accusamus perferendis quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt dignissimos commodi veniam unde! Commodi, modi fugiat quibusdam porro nobis nulla vel hic, adipisci saepe tenetur possimus accusamus perferendis quae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt dignissimos commodi veniam unde! Commodi, modi fugiat quibusdam porro nobis nulla vel hic, adipisci saepe tenetur possimus accusamus perferendis quae.
            </p>
        </div>
    );
}
