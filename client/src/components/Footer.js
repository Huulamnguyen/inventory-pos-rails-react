import React, {useState, useEffect} from "react"

function Footer (){
    const [todayQuote, setTodayQuote] = useState("")

    // useEffect(() => {
    //     fetch("https://zenquotes.io/api/today")
    //     .then(r => r.json())    
    //     .then(quote => console.log(quote))
    // }, [])

    return(
        <footer className="fixed-bottom bg-secondary">
            <div className="text-center py-3">© 2020 Copyright: Inventory & POS </div>
        </footer>
    )
}
export default Footer;