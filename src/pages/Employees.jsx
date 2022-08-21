import React from 'react';
import { GridComponent, ColumnsDirective, CoumnDirective, Page, Search, Inject } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { ColumnDirective } from '@syncfusion/ej2-react-charts';



const Employees = () => {
  return (
    <div className='m-2 ms:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSor
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search]} />
      </GridComponent>
    </div>

  )
}

export default Employees