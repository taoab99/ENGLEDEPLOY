import React from 'react'



var banner = [
    {
        title: "SALE 40%",
        phude: "Summer 2021",
        src: "https://demo.fieldthemes.com/eagle/ps17/img/cms/home%201/banner1-h1.jpg"
    },
    {
        title: "NEWARIVAL",
        src: "https://demo.fieldthemes.com/eagle/ps17/img/cms/home%201/banner2-h1.jpg"
    },
    {
        title: "SIMPLE STYLE",
        phude: "Up To 40% Off",
        src: "https://demo.fieldthemes.com/eagle/ps17/img/cms/home%201/banner3-h1.jpg"
    },
    {
        title: "NEW COLECTION",
        phude: "For Men",
        src: "https://demo.fieldthemes.com/eagle/ps17/img/cms/home%201/banner4-h1.jpg"
    },
];
var banershow = (banner) => {
    var result = "";
    if (banner) {
        result = banner.map((bane, index) => {
            return (
                <div className="col-6 col-sm-3 pt-5 pb-2" key={index}>
                    <div className="row-banner">
                        <img src={bane.src} alt={bane.title}></img>

                        <div className="row-banner-absolute">
                            {
                                bane.phude && <h4> {bane.phude} </h4>
                            }
                            {
                                bane.phude && <hr style={{ width: 40 + "%", margin: "auto", backgroundColor: "white" }}></hr>
                            }

                            <h2> {bane.title} </h2>
                        </div>
                    </div>

                </div>
            );
        });
        return result;
    };
    return result;
}
function HompageBanner(props) {
    return (
        <div className="row">
            {
                banershow(banner)
            }
        </div>
    )
}

export default HompageBanner

