import React, {Component} from 'react'
class PersonStats extends Component{
    constructor(props){
        super(props)
        this.state={
            Name:'',
            Age:'',
            Mood:'',
            submition: false
             
        }
    }
    handleChange = (event) => {
         
        let theName = event.target.ClassName;
        let theValue = event.target.value;
        if (theName === "Name") {
            this.setState({ [theName]: theValue })
        } else if (theName === "Age") {
            this.setState({ [theName]: theValue })
        } else if (theName === "Mood") {
            this.setState({ [theName]: theValue })
        }
    }
    ClickedSubmit=(event)=>{
        event.preventDefault();
        console.log('Clicked')
        console.log(this.state)
        this.setState({submition: true })
    }

   render(){
       if(this.state.ClickedSubmit){
           return(
               <div>
                   <h1>{`your name is ${this.state.Name} Age: ${this.state.Age} Mood:${this.state.Mood}`}</h1>
               </div>
           )
       }
       return(
           
           <div>
               <form action="">
                   <fieldset> 
                   <legend>User Form</legend>
                   <div>
                   <label htmlFor="Name">Name:</label>
                       <input className='Name' type="text" id='Name' value={this.state.Name} onChange={this.handleChange}/>
                   <hr></hr>
                   </div>
                   <div> 
                   <label htmlFor="Age">Age:</label>
                   <input className='Age' type="text" id='Age' value={this.state.Age} onChange={this.handleChange}/>
                   <hr/>
                   </div>
                   <div>
                   <label htmlFor="mood">Mood</label>
                   <input className='Mood' type="type" value={this.state.Mood} onChange={this.handleChange}/>
                   </div>
                   <button onClick={this.ClickedSubmit}>Submit</button>
                   </fieldset>
                   


               </form>

           </div>
       )
   } 
}
export default PersonStats