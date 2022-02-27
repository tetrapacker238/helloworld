import React, {Component} from 'react'

class Welcome extends Component{
    render() {
        return <h1>Welcome {this.props.name}!</h1>
    }
}

export default Welcome


//PUEDEN MANTENER SU PROPIA DATA, LO CUAL SE CONOCE COMO "ESTADO"
//UI MAS COMPLICADA
//PROVEE LIFECYCLE HOOKS
//CONTAINER COMPONENT