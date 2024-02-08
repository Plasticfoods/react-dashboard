import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import AccountCards from "./AccountCards"


function Dashboard() {
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const bgColor = isDarkTheme ? 'hsl(232, 19%, 15%)' : '#eee'
    const textColor = isDarkTheme ? 'hsl(0, 0%, 100%)' : 'black'
    const totalFollowrs = 230004

    return (
        <div 
            className="dashboard"
            style={{ backgroundColor: bgColor, color: textColor }}
        >   
            <div className="container2">
                {/* Header  */}
                <header className="md:flex md:justify-between">
                    <div className="pb-4 header-top md:pb-0">
                        <h1 className="text-2xl font-black tracking-tight lg:text-3xl mb-1">Social Media Dashboard</h1>
                        <div className="gray-text">Total followers: {totalFollowrs}</div>
                    </div>
                    <div className="flex justify-between pt-4 md:pt-0 md:gap-4 md:items-center">
                        <div className="font-bold" style={{fontSize: '.9rem'}}>Dark mode</div>
                        <Switch onCheckedChange={() => setIsDarkTheme(!isDarkTheme)} checked={isDarkTheme} /> 
                    </div>
                </header>

                {/* Accounts  */}
                <AccountCards isDarkTheme={isDarkTheme} />
            </div>
        </div>    
    )
}

export default Dashboard