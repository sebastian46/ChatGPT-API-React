import React from "react";

export default function Translation({ generateResponse, setInput, result}) {
    return (
        <div className="container">
            <div>
                <textarea className="text-area" cols={50} rows={10} onChange={(e) => setInput(e.target.value)}></textarea>
            </div>
            <div>
                <button className="action-btn" onClick={generateResponse}>Generate response</button>
            </div>
            <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
        </div>
    );
}