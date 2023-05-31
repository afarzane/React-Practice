import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm (props){
    const todayDate = new Date(); 
    const formatDate = todayDate.getDate() < 10 ? `0${todayDate.getDate()}`:todayDate.getDate();
    const formatMonth = todayDate.getMonth()+1 < 10 ? `0${todayDate.getMonth()+1}`: todayDate.getMonth()+1;
    const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join('-');

    const [userInput, setUserInput] = useState({
        inTitle: '',
        inAmount: '',
        inDate: formattedDate
    });
    
    function titleHandler (event){
        setUserInput((prevState)=>{
            return {...prevState, inTitle: event.target.value};
        });
    };

    function amountHandler (event){
        setUserInput((prevState)=>{
            return {...prevState, inAmount: event.target.value};
        });
    };

    function dateHandler (event){
        setUserInput((prevState)=>{
        const currDate = new Date(event.target.value); 
        const currFormatDate = currDate.getDate() < 10 ? `0${currDate.getDate()}`:currDate.getDate();
        const currFormatMonth = currDate.getMonth()+1 < 10 ? `0${currDate.getMonth()+1}`: currDate.getMonth()+1;
        const currFormattedDate = [currDate.getFullYear(), currFormatMonth, currFormatDate].join('-');

            return {...prevState, inDate: currFormattedDate};
        });
    };

    function submitHandler (event){
        event.preventDefault();

        props.onSaveExpenseData(userInput);

        setUserInput({inTitle: '', inAmount: '', inDate: formattedDate});
        
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={userInput.inTitle}
                        onChange={titleHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type='number'
                        value={userInput.inAmount} 
                        min="0.01" 
                        step="0.01" 
                        onChange={amountHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type='date'
                        value={userInput.inDate}
                        min="2023-01-1" 
                        max="2025-12-31" 
                        onChange={dateHandler}
                    />
                </div>

            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;