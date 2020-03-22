import React, {Component} from 'react'

class Box extends Component
{
    constructor(props)
    {
        super(props)
        this.handleClick=this.handleClick.bind(this)

    }
    handleClick()
    {
        this.props.remove(this.props.id)
    }
    render()
    {
        return(
            <div className="Box">
            <div className="Box-actual"
                style={{
                    height:this.props.height+"em",
                    width:this.props.width+"em", 
                    backgroundColor:this.props.bgcolor,
                    margin: "0 auto"
                }}
            />
            <button onClick={this.handleClick}>Remove</button>
            </div>
        );
    }
}

export default Box