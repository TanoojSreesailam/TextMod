import React from 'react'

export default function About(props) {
    
    // const [btn , setBtn] = useState("Dark mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.backgroundColor === 'white') {
    //         setMyStyle 
    //         ({
    //         color: 'lightblue',
    //         backgroundColor:'black',
           
    //         })
    //         setBtn("Light mode")
    //     }
    //     else {
    //         setMyStyle 
    //         ({
    //         color: 'black',
    //         backgroundColor:'white',
            
    //         })
    //         setBtn("Dark mode")
    //     }

    // }
   
    return (
        <div className='container py-1 px-3 my-4' style = {{ backgroundColor : props.mode === 'dark'? '#212529': 'white', color : props.mode === 'light'? 'black': 'white'}}>
            <h3 className='my-4'>About Us</h3>
            <div className="accordion my-4" id="accordionExample" style = {{ backgroundColor : props.mode === 'dark'? '#212529': 'white', color : props.mode === 'light'? 'black': 'white'}}>
                <div className="accordion-item" style = {{ backgroundColor : props.mode === 'dark'? '#212529': 'white', color : props.mode === 'light'? 'black': 'white'}}>
                <h2 className="accordion-header ">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {{ backgroundColor : props.mode === 'dark'? '#212529': 'white', color : props.mode === 'light'? 'black': 'white'}}>
                <strong>Analyze Your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    TextMod gives you a way to analyze your text quickly and efficiently. Be it a word count, charater count or space remover etc.
                </div>
            </div>
            </div>
            <div className="accordion-item"  style = {{ backgroundColor : props.mode === 'dark'? '#212529': 'white', color : props.mode === 'light'? 'black': 'white'}}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style = {{ backgroundColor : props.mode === 'dark'? '#212529': 'white', color : props.mode === 'light'? 'black': 'white'}}>
            <strong>Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                TextMod is a free character counter tool that provides instant Extra space remover, copy text & word count statistics for a given text. TextMod reports the number of words and characters. Thus it is suitable for writing text with word/character
                </div>
            </div>
            </div>
            <div className="accordion-item"  style = {{ backgroundColor : props.mode === 'dark'? '#212529': 'white', color : props.mode === 'light'? 'black': 'white'}}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style = {{ backgroundColor : props.mode === 'dark'? '#212529': 'white', color : props.mode === 'light'? 'black': 'white'}}>
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    This Text modifier software works in any web browser such as Chrome, FireFox, Safari, Opera, Brave. It suits to count words and characters in blog, books, excel, document, pdf, etc.
                </div>
            </div>
            </div>
            </div>
        
        </div>
    )
}
