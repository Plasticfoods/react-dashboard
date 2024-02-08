import AccountCard from "./AccountCard"
import accounts from "@/accounts"


export default function AccountCards({ isDarkTheme }) {
    const cardBgColor = isDarkTheme ? 'hsl(228, 28%, 20%)' : 'hsl(225, 100%, 98%)'
    const cardTextColor = isDarkTheme ? 'hsl(0, 0%, 100%)' : 'black'

    return (
        <div className="account-cards">
            {accounts.map((element, index) => (
                <AccountCard 
                    key={index}
                    cardBgColor={cardBgColor} 
                    textColor={cardTextColor} 
                    topLogo={element.topLogo}
                    username={element.username}
                    followerCount={element.followerCount}
                    upDownIcon={element.upDownIcon}
                    followesChange={element.followesChange}
                />
            ))}            
        </div>
    )
}