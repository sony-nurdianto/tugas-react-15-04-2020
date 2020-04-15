import React, { Component } from 'react'
import Axios from 'axios'
import Show from './Show'
import {Row} from 'react-bootstrap'


export default class Data extends Component {
    state = {
        datas : []
    }
    
    componentDidMount(){
        Axios.get('http://localhost:3001/data')
        .then(res =>{
           const datas = res.data
            this.setState({datas});
            
        })
    }

    render() {
        let x = this.state.datas.map((item) =>(
            <div key={item.id}
            className="card"
            style={{
            width: '18rem'
            }}>
                <img src={item.values.imgUrl} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{item.values.nama}</h5>
                    <p class="card-text">{item.values.description}</p>
                    
                </div>
            </div>
        ))
        console.log(this.state.data)
        
        return (
            <div>
               {x}
            </div>
            
        )
    }
}
