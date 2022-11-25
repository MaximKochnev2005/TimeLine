import "./list.scss"
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import {ListItem} from "../listItem/ListItem";
import {useRef, useState} from "react";

export const List = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    const listRef:any = useRef();

    const handleClick = (direction:string):void => {
        console.log(isMoved)
        setIsMoved(true)
        let distance:number = listRef.current.getBoundingClientRect().x - 50
        console.log(distance)
        if (direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${distance + 230}px)`;
        } else if( direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${distance - 230}px)`;
        }
    }
    return (
        <div className={"list"}>
            <span className="listTitle">Continue to watch</span>
            <div className={"wrapper"}>
                <ArrowBackIosOutlined
                    className={"sliderArrow left"}
                    onClick={() => handleClick("left")}
                    style={{display: isMoved ? "block" :"none"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </div>
                <ArrowForwardIosOutlined
                    className={"sliderArrow right"}
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    )
}
