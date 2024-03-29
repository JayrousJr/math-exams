import { Link, useSearchParams } from "react-router-dom";

function Home() {
    const [searchparam, setSearchParams] = useSearchParams();
    // console.log(searchparam.get("name"));
    return (
        <>
            <section className="hero main-grid">
                <h1 className="hero-title">
                    The Only Platform with the
                    <span className="accent-color">
                        Mathematics Online Examination
                    </span>
                    Capabilities in Tanzania for Advanced Secondary Schools!
                </h1>
                <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem magni ipsam doloremque. Labore mollitia tempore
                    dolorem doloremque quasi suscipit.
                </p>
                <Link to="/exams" className="btn btn-primary">
                    Exams
                </Link>
            </section>
            <section className="info main-grid">
                <div className="col">
                    <h2 className="section-title section-title-centered">
                        First Title
                    </h2>
                    <p className="section-sub">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore distinctio vitae, quae animi, inventore possimus.
                    </p>
                </div>
                <div className="col ">
                    <h2 className="section-title section-title-centered">
                        Second Title
                    </h2>
                    <p className="section-sub">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore distinctio vitae, quae animi, inventore possimus.
                    </p>
                </div>
                <div className="col ">
                    <h2 className="section-title section-title-centered">
                        Third Title
                    </h2>
                    <p className="section-sub">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore distinctio vitae, quae animi, inventore possimus.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Home;
