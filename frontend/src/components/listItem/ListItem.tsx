import "./listitem.scss"
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@material-ui/icons";

export const ListItem = () => {
    return(
        <div className={"listItem"}>
            <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
                 alt=""/>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow/>
                    <Add/>
                    <ThumbUpAltOutlined/>
                    <ThumbDownAltOutlined/>
                </div>
            </div>
        </div>
    )
}
