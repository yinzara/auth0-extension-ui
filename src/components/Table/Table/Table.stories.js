import React from 'react';

import Table from './';
import { TableHeader, TableColumn, TableBody, TableRow, TableCell, TableIconCell, TableTextCell } from '../../';

export default {
  title: 'Table'
};

export const DefaultView = {
  name: 'default view',
  render: () => (
    <Table>
      My table content
    </Table>
  )
};

export const SampleTable = {
  name: 'sample table',
  render: () => (
    <Table>
      <TableHeader>
        <TableColumn width="10%" />
        <TableColumn width="50%">Table Column</TableColumn>
        <TableColumn width="40%" />
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableIconCell color="green" icon="573" />
          <TableTextCell>Table Text Cell</TableTextCell>
          <TableCell>
            Another Table Cell
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
};

