import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import {
  Columns,
  Icon,
  Select,
  Table,
  TableBody,
  TableHead,
  Td,
  Text,
  Th,
  Tr,
} from 'devfractal-ui-core'
import React from 'react'
import { useAuth } from '../../auth/AuthContext'

export const CostAnalysisPerEvReport = () => {
  const { setHeaderText } = useAuth()
  setHeaderText('Cost Analysis Report > Cost Analysis per EV')
  return (
    <>
      <Columns style={{ paddingLeft: '40px', marginTop: '10px' }}>
        <Icon
          color="#2c7dc0"
          style={{ marginTop: '-1px', marginLeft: '15px' }}
          icon={faUserCircle}
        />
        <Text style={{ color: '#2c7dc0', marginLeft: '8px' }}>EV ID - </Text>{' '}
        <Text>5464 </Text>
        <Select name="select EV" style={{ marginLeft: '700px' }}>
          <option value="select EV">select EV</option>
        </Select>
        <Select name="select month" style={{ marginLeft: '100px' }}>
          <option>select month</option>
          <option>january</option>
          <option>february</option>
          <option>march</option>
          <option>april</option>
          <option>may</option>
          <option>june</option>
          <option>july</option>
          <option>august</option>
          <option>september</option>
          <option>october</option>
          <option>november</option>
          <option>december</option>
        </Select>
      </Columns>
      <Table striped>
        <TableHead>
          <Tr>
            <Th />
            <Th>JAN</Th>
            <Th>FEB</Th>
            <Th>MAR</Th>
            <Th>APR</Th>
            <Th>MAY</Th>
            <Th>JUN</Th>
            <Th>JUL</Th>
            <Th>AUG</Th>
            <Th>SEP</Th>
            <Th>OCT</Th>
            <Th>NOV</Th>
            <Th>DEC</Th>
          </Tr>
        </TableHead>
        <TableBody>
          <Tr>
            <Th>Charging cost</Th>
            <Td>38,500</Td>
            <Td>40,300</Td>
            <Td>38,500</Td>
            <Td>40,300</Td>
            <Td>38,500</Td>
            <Td>40,300</Td>
            <Td>38,500</Td>
            <Td>40,300</Td>
          </Tr>
          <Tr>
            <Th>Tolls</Th>
            <Td>4,500</Td>
            <Td>5,500</Td>
            <Td>4,500</Td>
            <Td>5,500</Td>
            <Td>4,500</Td>
            <Td>5,500</Td>
            <Td>4,500</Td>
            <Td>5,500</Td>
          </Tr>
          <Tr>
            <Th>Fines</Th>
            <Td>1500</Td>
            <Td>0</Td>
            <Td>1500</Td>
            <Td>0</Td>
            <Td>1500</Td>
            <Td>0</Td>
            <Td>1500</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Th>Maintainence</Th>
            <Td>3100</Td>
            <Td>2800</Td>
            <Td>3100</Td>
            <Td>2800</Td>
            <Td>3100</Td>
            <Td>2800</Td>
            <Td>3100</Td>
            <Td>2800</Td>
          </Tr>
          <Tr>
            <Th>Salary</Th>
            <Td>18,000</Td>
            <Td>18,000</Td>
            <Td>18,000</Td>
            <Td>18,000</Td>
            <Td>18,000</Td>
            <Td>18,000</Td>
            <Td>18,000</Td>
            <Td>18,000</Td>
          </Tr>
          <Tr>
            <Th>other expenses</Th>
            <Td>4,150</Td>
            <Td>3,750</Td>
            <Td>4,150</Td>
            <Td>3,750</Td>
            <Td>4,150</Td>
            <Td>3,750</Td>
            <Td>4,150</Td>
            <Td>3,750</Td>
          </Tr>
        </TableBody>
      </Table>
    </>
  )
}
