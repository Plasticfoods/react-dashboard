import { useState } from "react"
import { Switch } from "@/components/ui/switch"


function Dashboard() {
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const bgColor = isDarkTheme ? 'hsl(232, 19%, 15%)' : '#eee'
    const textColor = isDarkTheme ? 'hsl(0, 0%, 100%)' : 'black'
    const followrs = 230004

    return (
        <div 
            className="dashboard"
            style={{ backgroundColor: bgColor, color: textColor }}
        >   
            <div className="container2">
                <header className="md:flex md:justify-between">
                    <div className="pb-4 header-top md:pb-0">
                        <h1 className="text-3xl font-black tracking-tight lg:text-2xl mb-1">Social Media Dashboard</h1>
                        <div className="gray-text">Total followers: {followrs}</div>
                    </div>
                    <div className="flex justify-between pt-4 md:pt-0 md:gap-4 md:items-center">
                        <div className="font-bold" style={{fontSize: '.9rem'}}>Dark mode</div>
                        <Switch onCheckedChange={() => setIsDarkTheme(!isDarkTheme)} checked={isDarkTheme} /> 
                    </div>
                </header>
            </div>
        </div>    
    )
}

export default Dashboard