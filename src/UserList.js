// import React, { Component } from 'react'
// import axios from 'axios'

// export default class UserList extends Component {
//     state={users:[],isLoading:true}
//     //Created by "CDM" snippet
//     componentDidMount() {
//         setTimeout(() => {
//             /*fetch('https://jsonplaceholder.typicode.com/users')
//                     .then(result => result.json())
//                     .then(jsonData => this.setState({users:jsonData,isLoading:false}))*/
//             axios.get('https://jsonplaceholder.typicode.com/users')
//                     .then(jsonData => this.setState({users:jsonData.data,isLoading:false}))
//         }, 3000);
//     }
    
//     render() {
//         const {isLoading,users}=this.state
//         return (
//             <div>
//                 <h1>Users</h1>
//                 {isLoading === true ? 'Loading...' : users.map(item=><div key={item.id}>
//                      {item.name}
//                 </div>)}
//                 {/* {this.state.users.map(item=><div key={item.id}>{item.name}</div>)} */}
//             </div>
//         )
//     }
// }







import React, { Component } from "react";

export default class UserList extends Component {
  state = { users: [], loading: true, indexes: [] };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((jsonData) => this.setState({ users: jsonData, loading: false }));
  }

  componentDidUpdate() {
    const { users, indexes } = this.state;

    if (indexes.length !== users.length) {
      setTimeout(() => {
        this.setState((prevState) => ({
          ...prevState,
          indexes: [...prevState.indexes, prevState.indexes.length]
        }));
      }, 2000);
    }
  }

  render() {
    const { users, indexes, loading } = this.state;

    return (
      <div>
        <h1>USERS</h1>

        {loading && <h1>Loading..........</h1>}

        {users.length > 0 &&
          indexes.length > 0 &&
          indexes.map((index) => <div>{users[index].name}</div>)}
      </div>
    );
  }
}