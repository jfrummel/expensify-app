import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = focusedInput => {
        this.setState(() => ({ focusedInput }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSelectChange = (e) => e.target.value === "amount" ?
        this.props.sortByAmount()
        : this.props.sortByDate();

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <label>Sort By</label>
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSelectChange}
                >
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={this.props.filters.endDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate())
});


const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);