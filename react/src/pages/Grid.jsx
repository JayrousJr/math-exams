import img from "../assets/pic.jpg";
function Grid() {
    return (
        <>
            <div className="grid-container">
                <h2 className="articale-head">Keeping Cooking simple</h2>
                <p className="article-details">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dignissimos ducimus fugit et vero numquam odio veritatis ut
                    distinctio nulla sint asperiores, natus quaerat, quod, esse
                    provident voluptas totam molestias alias!
                </p>
                <h3 className="article-image-header">Continue reading</h3>
                <img src={img} alt="article image" className="article-image" />
                <p className="article-date">July 19, 2019 | 3 comments</p>
            </div>
        </>
    );
}

export default Grid;
