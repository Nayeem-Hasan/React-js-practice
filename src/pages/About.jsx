import React from 'react';
import Menu from '../component/Menu';
import { useState } from 'react';

const about = () => {

    const [list,setList]=useState([]);  
    const [item,setItem]=useState("");
    
    const addToList = ()=> {
        list.push(item);
        setList([...list]);
    };
    const RemoveItem = (index)=>{
        list.splice(index,1);
        setList([...list]);
    };
    return (
        <div>
            <Menu/>
            <div className="about-page">
                <div className="add-item">
                    <h1>Add Item for Connected us</h1>
                </div>
                <table>
                    <tbody>
                    {
                        list.length!==0?(
                        list.map((element,index)=>{
                            return(
                            <tr>
                                <td>{element}</td>
                                <td><button onClick={()=>{RemoveItem(index)}} className="item-btn remove-item-btn">Remove</button></td>
                            </tr>
                            )
                        })
                        ):(<tr></tr>)
                    }
                    </tbody>
                </table>

      
                <div className='listing-input'>
                    <input onChange={(e)=>setItem(e.target.value)} placeholder="Item" className='item-input'/>
                    <button onClick={addToList} className="item-btn add-item-btn">Add Item</button>
                </div>
            </div>
        </div>
    );
};

export default about;