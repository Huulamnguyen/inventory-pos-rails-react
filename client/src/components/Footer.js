import React, {useState, useEffect} from "react"

function Footer (){
    const [todayQuote, setTodayQuote] = useState("")

    // useEffect(() => {
    //     fetch("https://zenquotes.io/api/today", {
    //         mode: 'no-cors',
    //         headers: {
    //             'Accept': 'application/json',
    //             "Access-Control-Allow-Origin" : "*", 
    //             "Access-Control-Allow-Credentials" : true 
    //         }
    //     })
    //     .then(r => JSON.parse(r))    
    //     .then(quote => console.log(quote))
    // }, [])

    return(
        <footer className="fixed-bottom bg-secondary">
            <div className="text-center py-3">© 2020 Copyright: Inventory & POS </div>
        </footer>
    )
}
export default Footer;