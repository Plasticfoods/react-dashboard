import OverviewCard from "./OverviewCard"
import fbLogo from '../images/icon-facebook.svg'
import iconUp from '../images/icon-up.svg'
import overviewList from "@/overviewList"


export default function Overview({ isDarkTheme, textColor }) {
    const cardBgColor = isDarkTheme ? 'hsl(228, 28%, 20%)' : 'hsl(225, 100%, 98%)'

    return (
        <div className="overview">
            <h2
                className="font-bold text-2xl pb-7"
                style={{ color: textColor }}
            >
                Overview - Today
            </h2>
            <div className="overview-cards">

                {overviewList.map((element, index) => (
                    <OverviewCard 
                        key={index}
                        cardBgColor={cardBgColor} 
                        textColor={textColor} 
                        topText={element.topText}
                        topLogo={element.topLogo}
                        growthNumber={element.growthNumber}
                        growthPercentage={element.growthPercentage}
                        upDownIcon={element.upDownIcon}
                    />
                ))}

            </div>
        </div>
    )
}