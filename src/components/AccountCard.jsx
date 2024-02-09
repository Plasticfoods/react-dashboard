import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"


export default function AccountCard({ cardBgColor, textColor, topLogo, username, followerCount, upDownIcon, followesChange }) {
    let bottomTextColor = 'green'
    if(followesChange < 0) bottomTextColor = 'red'
    
    return (
        <Card
            className='account-card overflow-hidden border-none'
            style={{ backgroundColor: cardBgColor, color: textColor }}
        >
            <div className="card-top-bar"></div>
            <CardHeader>
                <div className="flex justify-center card-header gap-2">
                    <h3>
                        <img src={topLogo} alt="logo" />
                    </h3>
                    <CardDescription className='font-bold'>{username}</CardDescription>
                </div>
            </CardHeader>
            <CardContent className='flex flex-col items-center'>
                <p className="text-5xl font-bold">
                    {followerCount >= 10000 ? (followerCount / 1000 + 'k') : followerCount}
                </p>
                <p
                    className="gray-color uppercase text-xs break-all"
                    style={{ letterSpacing: '.4em' }}
                >
                    Followers
                </p>
            </CardContent>
            <CardFooter className='flex gap-2 justify-center'>
                <img src={upDownIcon} alt="growth icon" />
                <p 
                    className="font-semibold text-sm"
                    style={{ color: bottomTextColor }}
                >
                    {followesChange < 0 ? (followesChange * -1) : followesChange} Today
                </p>
            </CardFooter>
        </Card>
    )
}