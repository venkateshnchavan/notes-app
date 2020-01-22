import React from 'react';
import { connect } from 'react-redux'
import { startRegisterUser } from '../../actions/user'

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.props.dispatch(startRegisterUser(formData, this.props))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <React.Fragment>
                <h3>Register</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:<br/>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Email:<br/>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        Password:<br/>
                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label><br/><br/>
                    <input type="submit" />
                </form>
            </React.Fragment>
        )
    }
}

export default connect()(Register)