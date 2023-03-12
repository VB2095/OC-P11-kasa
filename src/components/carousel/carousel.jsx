//create a carousel component that will be used in the locations page to display the pictures of the location it has navigaation between image and the number of image in the carousel, if there is only one image it will not display the navigation and the number of image

import React, { useState } from "react";
import "./carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Carousel(props) {

    const [index, setIndex] = useState(0);
    
    const next = () => {
        if (index < props.images.length - 1) {
        setIndex(index + 1);
        } else {
        setIndex(0);
        }
    };
    
    const previous = () => {
        if (index > 0) {
        setIndex(index - 1);
        } else {
        setIndex(props.images.length - 1);
        }
    };
    
    return (
        <div className="carousel">
            <div className="carousel-image">
                <img src={props.images[index]} alt="carousel" />
                <div className="carousel-navigation">
                {props.images.length > 1 && (
                <>
                    <
                    button onClick={previous}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <p>
                    {index + 1} / {props.images.length}
                    </p>
                    <button onClick={next}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </>
                )}
                </div>
        </div>

        </div>
    );
    }

export default Carousel;

