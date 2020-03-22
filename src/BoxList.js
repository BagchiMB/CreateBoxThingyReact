import React, {Component} from 'react'
import './BoxList.css'
import NewBoxForm from './NewBoxForm'
import Box from './Box'

class BoxList extends Component
{
    constructor(props)
    {
        super(props)
        this.state={boxes:[],id:''}
        this.createBoxObj=this.createBoxObj.bind(this)
        this.remove=this.remove.bind(this)
    }
    createBoxObj(obj)
    {
        this.setState({boxes:[...this.state.boxes,obj]})
    }
    remove(ID)
    {
        this.setState(function ()
        {
            let array=[]
            for (let i = 0; i < this.state.boxes.length; i++) 
            {   
                if(ID===this.state.boxes[i].id)
                {

                }
                else
                {
                    array.push(this.state.boxes[i])
                }   
            }
            return {boxes:array}
        });
    }

    render()
    {
        let b=[];
        for (let i = 0; i < this.state.boxes.length; i++)
        {
            b.push(<Box id={this.state.boxes[i].id} remove={this.remove} width={this.state.boxes[i].width} height={this.state.boxes[i].height} bgcolor={this.state.boxes[i].bgcolor}/>)      
        }
        return(
            <div className="BoxList">
                <h1>Create Boxes</h1>
                <NewBoxForm createBox={this.createBoxObj}/>
                {b}
            </div>
        );
    }
}

export default BoxList