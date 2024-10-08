import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      };
const CustomTable = ({headers,bodyData,handleRowSelect,isSomeSelected,isAllSelected,handleSelectAll}) => {
  return (
    <Table>
    <TableHeader className="highlighted-color">
      <TableRow>
      <TableHead>
          <input
            type="checkbox"
            checked={isAllSelected} 
            ref={(el) => {
              if (el) el.indeterminate = isSomeSelected; 
            }}
            onChange={handleSelectAll}
          />
        </TableHead>
        {headers.map((header, index) => (
          <TableHead key={index} className="font-bold text-black">
            {capitalizeFirstLetter(header)}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {bodyData.length ? (
        bodyData.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            data-state={row.isSelected ? "selected" : null}
          >
              <TableCell>
              <input
                type="checkbox"
                checked={row.isSelected}
                onChange={() => handleRowSelect(rowIndex)} 
              />
            </TableCell>
            {row.cells.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>
                {console.log(cellIndex,row)}
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={headerData.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
    
  </Table>
  )
}

export default CustomTable
