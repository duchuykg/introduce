    import React from 'react';
    import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

    type Props = {
        name: string;
        columnNames: string[];
        values: number[];
    };

    export const ColumnChart : React.FC<Props> = ({name, columnNames, values}) => {
        const data = columnNames.map((name, index) => ({
            name: name,
            achievement: values[index],
        }));


    return (

        <div>
            <h4 style={{ justifyContent: 'center', textAlign: 'center' }}> {name} </h4>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <BarChart width={720} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name">
                    </XAxis>
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="achievement" fill="#8884d8" barSize={40} />
                </BarChart>
            </div>
        </div>
    );
    };