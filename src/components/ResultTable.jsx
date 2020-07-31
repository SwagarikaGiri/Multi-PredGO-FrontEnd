import React from 'react';

class ResultTable extends React.Component {

    dispalyResults=(data)=>{
        if (typeof(data)==="string")
        {
            return (
                <h5 className="section-subheading">{data}</h5>
            )
        }
        else{
            let functionArray = data.ot
            console.log(typeof(functionArray))
            console.log(data)
            console.log("*************"+functionArray+"*************")
            if(functionArray)
            {
                return(functionArray.map(go=>(<li key={go}>
                    {go}
                </li>)))
            }
            
        }

    }
  
    render(){
        let data = this. props.results

        // console.log(data)
        // console.log(results)
        return(
            <div>
               {this.dispalyResults(data)}
            </div>
        )
    }


}

export default ResultTable;