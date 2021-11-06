import React, { Component } from "react";

class StudentList extends Component{

  state = {
    students: []
  }

  componentDidMount(){
      fetch("http://localhost:5000/api/students")
        .then((results) => results.json())
        .then((data)=>{
          console.log(data)
          this.setState({
            students: data
          })
        })

    // this.setState({
    //   students: [{firstName: "eric"}]
    // })
  }

  render(){
    return (
      <div className="StudentList">
        {JSON.stringify(this.state.students)}
      </div>
    )
  }

}

export default StudentList;