/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import useSWR from 'swr'
import './style.scss'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const headers = ['cell', 'genreFR', 'email', 'phone', 'nat', 'age']

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const { data, error } = useSWR(
    'https://randomuser.me/api/?results=10',
    fetcher
  )

  if (!data) {
    return <span>Loading</span>
  }

  if (error) {
    return <span>Error</span>
  }

  const { results } = data
  const mapping = results.map((r) => ({
    cell: r.cell,
    genreFR: r.gender,
    email: r.email,
    phone: r.phone,
    nat: r.nat,
    age: r.dob.age
  }))

  return (
    <Profiler id="Experience" onRender={onRender}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => {
                return <TableCell key={header}>{header}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {mapping.map((row) => (
              <TableRow key={row.cell}>
                {headers.map((header, index) => {
                  return <TableCell key={`${index}`}>{row[header]}</TableCell>
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Profiler>
  )
}

export default Experience
