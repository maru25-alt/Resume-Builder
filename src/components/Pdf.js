import React from 'react';
import jsPDF from 'jspdf'
import ReactDOMServer from "react-dom/server";


class Pdf extends React.Component {
    constructor(props) {
        super(props)
        this.state ={}
    };

    generatePDF = () => {
      var doc = new jsPDF();
      doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
      console.log(this.render())
      doc.save('resume.pdf')
    }   
    
   render() {
      
      return (
         <div>
            <div className="section_heading">
                    <span  role="img" aria-label="emoji">❇️❇️❇️ Step 2 ❇️❇️❇️</span>
                    <h3>Fill up your Highest Educational Qualifications:</h3>
                </div>
              
            <button onClick={this.generatePDF} type="primary">Download PDF</button> 
         </div>
      );
   }
}

export default Pdf;