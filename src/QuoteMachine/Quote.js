export default function Quote({quote,reff}){
    return(
        <div ref={reff} className="quote">

            <div className="p2">
                <div className="p21">
                    <b>''</b>
                </div>
                <div className="p22">
                    {quote.quote}
                </div>
                <div className="p23">
                    -{quote.author}
                </div>
                <div className="p24">
                    <b>''</b>
                </div>
            </div>
        </div>
    )
}