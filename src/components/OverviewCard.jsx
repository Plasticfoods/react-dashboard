import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"


export default function OverviewCard({ cardBgColor, textColor, topText, topLogo, growthNumber, growthPercentage, upDownIcon }) {
    let bottomTextColor = 'green'
    if(growthPercentage < 0) {
        bottomTextColor = 'red'
        growthPercentage *= -1
    }

    return (
        <Card
            className="overview-card border-0"
            style={{ backgroundColor: cardBgColor, color: textColor }}
        >
            <CardHeader>
                <div className='flex justify-between'>
                    <p className="gray-color font-semibold text-base">{topText}</p>
                    <div>
                        <img src={topLogo} alt="logo" />
                    </div>
                </div>
            </CardHeader>
            <CardContent className='flex justify-between'>
                <p className="text-2xl font-bold">{growthNumber > 10000 ? (growthNumber / 1000 + 'k') : growthNumber}</p>
                <div className="flex gap-2 items-center">
                    <div className="flex justify-between items-end text-lg">
                        <img src={upDownIcon} alt="grwoth icon" />
                    </div>
                    <p 
                        style={{ color: bottomTextColor }}
                        className="font-semibold text-sm"
                    >
                        {growthPercentage}%
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}