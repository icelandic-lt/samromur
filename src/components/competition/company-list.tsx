import * as React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import styled from 'styled-components';
import useSWR from 'swr';
import { getCompanies } from '../../services/competition-api';
import { ScoreboardData } from '../../types/competition';

const CompanyListContainer = styled.div`
    width: 100%;
    max-width: 30rem;
`;

const sizeFormatter = (cell: any, row: ScoreboardData) => {
    switch (row.size) {
        case 'small':
            return 'Færri en 70ll';
        case 'medium':
            return '70-300';
        case 'large':
            return 'Meira en 300';
        default:
            return '';
    }
};

const columns = [
    // {
    //     dataField: 'rank',
    //     text: '# Staða',
    //     sort: true,
    //     // headerStyle: () => {
    //     //     return { width: '10%' };
    //     // },
    //     headerAlign: 'left',
    //     align: 'center',
    // },
    {
        dataField: 'name',
        text: 'Vinnustaður',
        sort: true,
        headerStyle: () => {
            return { width: '50%' };
        },
        // align: 'center',
        // headerAlign: 'center',
        // filter: textFilter(),
    },
    {
        dataField: 'size',
        text: 'Fjöldi starfsmanna',
        sort: true,
        hidden: false,
        formatter: sizeFormatter,
    },
];

const CompanyList: React.FC = () => {
    const { error, data } = useSWR('companies', getCompanies);

    return (
        <CompanyListContainer>
            {data && (
                <div>
                    <BootstrapTable
                        keyField="name"
                        data={data}
                        columns={columns}
                        bootstrap4
                        striped
                    />
                </div>
            )}
        </CompanyListContainer>
    );
};

export default CompanyList;