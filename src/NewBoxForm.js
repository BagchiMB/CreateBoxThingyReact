import React, {Component} from 'react'
import uuid from 'uuid/v4'
class NewBoxForm extends Component
{
    constructor(props)
    {
        super(props)
        this.state={width:'',height:'',bgcolor:'',id:''}
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e)
    {
        e.preventDefault()
        this.props.createBox(this.state)
        this.setState({width:'',height:'',bgcolor:'',id:''})
    }
    handleChange(e)
    {   
        
        this.setState({[e.target.name]:e.target.value,id:uuid()})
    }
    render()
    {
        return(
            <div className="NewBoxForm">
                <form>
                    <label htmlFor='width'>Width: </label>
                    <input placeholder="Width" id="width" name="width" value={this.state.width} onChange={this.handleChange}></input><br />
                    <label htmlFor='height'>Height: </label>
                    <input placeholder="Height" id="height" name="height" value={this.state.height} onChange={this.handleChange}></input><br />
                    <label htmlFor="bgcolor">Colour: </label>
                    <input placeholder="Background Colour" id="bgcolor" name="bgcolor" value={this.state.bgcolor} onChange={this.handleChange}></input><br /><br />
                    <button onClick={this.handleSubmit}>Create Box!</button>
                </form>
            </div>
        );
    }
}

export default NewBoxForm