import moment from 'moment';

export default [{
    id: '1',
    description: "candy",
    note: '',
    amount: 200,
    createdAt: 0
},
{
    id: '2',
    description: "apples",
    note: '',
    amount: 1400,
    createdAt: moment(0).subtract(2, "days").valueOf()
},
{
    id: '3',
    description: "coffee",
    note: '',
    amount: 600,
    createdAt: moment(0).add(4, "days").valueOf()
}
];
