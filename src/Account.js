import React, { Component } from 'react';


export default class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0
    }
  }

  _handleSubmitDeposit(){
    let newDeposit = parseInt(this.refs.deposit.value, 0);
    let currentBalance = this.state.balance;
    console.log(newDeposit);

    this.setState({
      balance: currentBalance + newDeposit
    })
    this.refs.deposit.value = '';
  }

  _handleSubmitWithdrawal(){
    let newDeposit = parseInt(this.refs.deposit.value, 0);
    let currentBalance = this.state.balance;
    console.log(newDeposit);

    this.setState({
      balance: currentBalance - newDeposit
    })
    this.refs.deposit.value = '';
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="deposit"/>
        <input type="button" value="Deposit" onClick={this._handleSubmitDeposit.bind(this)} />
        <input type="button" value="Withdraw" onClick={this._handleSubmitWithdrawal.bind(this)}/>
      </div>
    )
  }
}
