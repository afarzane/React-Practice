import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props){
    const [filtYear, setFiltYear] = useState('2023');
    
    function updateFilter (selectedYear) {
        setFiltYear(selectedYear);
    }
    
    return(
        <Card className="expenses">
            <ExpenseFilter selected={filtYear} onChangeFilter={updateFilter}/>
            {props.expenses.map((expense) => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                />)
            )}
        </Card>
    );
}

export default Expenses;

