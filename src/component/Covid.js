import axios from "axios";
import React, { Component } from "react";

class PostList extends  Component{
    constructor(){
        super()
        this.state={
            ApiData:[]
        }
    }
    covidData=()=>{
        axios.get('https://api.covidtracking.com/v1/states/current.json')
        .then(response=>{
            console.log(response);
            this.setState({ApiData:response.data})
        })
    }
    render(){
        let {ApiData}=this.state
        return(
             <div className="App">
             <h1>COVID TRACKING</h1>
             <input type="text" placeholder="Search........... " onChange={this.covidData()}/>

             <table className="center1">
             <tr>

             <td className="td">STATE</td>
             <td  className="td1">POSITIVE</td>
             <td className="td2">DATE  TIME</td>
             <td className="td3">TOTAL</td>
             </tr>
             </table>
             
             <div className="App1">{ApiData.map((ApiData)=>{
                return(
                    <div >
                    <table className="center">
                    <tr>
                    <td className="td">{ApiData.state}</td>
                    <td className="td1">{ApiData.positive}</td>
                    <td className="td2">{ApiData.lastUpdateEt}</td>
                    <td className="td3">{ApiData.total}</td>

                    </tr>
                    </table>
                    </div>
                )
            })}</div>

             </div>
        )
    }
}
export default PostList






// {ApiData.filter((ApiData)=>{
    // return(
    //    ApiData.state.toLowerCase().includes(this.state.Apiget.toLowerCase())||
    //    ApiData.positive.toLowerCase().includes(this.state.Apiget.toLowerCase())


    // )
// })}




