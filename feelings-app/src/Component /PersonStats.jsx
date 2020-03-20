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
                   <legend>User Form</legend>
                   <label htmlFor="Name">Name:</label>
                       <input className='Name' type="text"/>
                   <hr></hr>
                   <label htmlFor="Age">Age:</label>
                   <input className='Age' type="text"/>
                   <hr/>
                   <label htmlFor="mood">Mood</label>
                   <input className='Mood' type="type"/>
                   <button onClick={this.ClickedSubmit}>Submit</button>


               </form>

           </div>
       )
   } 
}
export default PersonStats