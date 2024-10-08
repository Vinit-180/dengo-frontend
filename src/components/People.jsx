"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import CustomTable from "./CustomTable";
import PopupForm from "./PopupForm";
import addAccountIcon from "../../public/addAccountIcon.svg"
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
const People = () => {
  const headerData = ["People", "Properties"];
  const [tableData, setTableData] = useState([]);
  const [headers,setHeaders] =useState();
  const [bodyData,setBodyData] =useState([]) ;
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isSomeSelected, setIsSomeSelected] = useState(false);
  const [tableKey, setTableKey] = useState(0); // Key to force re-render

  const handleRowSelect = (rowIndex) => {
    setTableData((prevBodyData) =>
      prevBodyData.map((row, index) =>
        index === rowIndex
          ? { ...row, isSelected: !row.isSelected } // Toggle `isSelected`
          : row
      )
    );
  };
  const handleSelectAll = () => {
    const newSelectionState = !isAllSelected; 
    setTableData((prevBodyData) =>
      prevBodyData.map((row) => ({
        ...row,
        isSelected: newSelectionState, 
      }))
    );
    setIsAllSelected(newSelectionState);
  };

  // var keytable=0;
  useEffect(() => {
    
    const selectedRows = bodyData?.filter((row) => row.isSelected).length;
    setIsAllSelected(selectedRows === bodyData?.length); 
    setIsSomeSelected(selectedRows > 0 && selectedRows < bodyData?.length); 
    // keytable+=1;
  }, [bodyData]);

  useEffect(()=>{
    const d= {
      id: "m5gr84i9",
      name: "J P",
      email: "ken99@yahoo.com",
      status: "active",
      property: "-",
      unit: "Admin",
      role: "ABC",
      lastInvited: "08/15/2024",
      isSelected: false,
    };
    const newData=[d];
    // setTableData([{
    //   id: "m5gr84i9",
    //   name: "J P",
    //   email: "ken99@yahoo.com",
    //   status: "active",
    //   property: "-",
    //   unit: "Admin",
    //   role: "ABC",
    //   lastInvited: "08/15/2024",
    //   isSelected: false,
    // }]);
    // keytable+=1;
    setTableKey((prevKey) => prevKey + 1);

    setHeaders( Object.keys(d).filter(
      (key) => key !== "id" && key != "isSelected" && key != "email"
    ))
    console.log(newData)

    setBodyData(newData.map((item) => ({
      key: item?.id,
      cells: [
       item?.name,
        item?.status === "active" ? (
          <button className=" px-4 py-1 rounded-lg bg-orange-100 text-green-400 ">
            Active
          </button>
        ) : (
          <button className=" px-4 py-1 rounded-lg bg-orange-100 text-red-400 ">
            Inactive
          </button>
        ),
        item?.property,
        item?.unit,
        item?.role,
        item?.lastInvited,
      ],
      isSelected: item?.isSelected,
    })))
  },[]);

  const [isOpen, setIsOpen] = useState(false);

  const openSheet = () => {
    setIsOpen(true);
  };

  const closeSheet = () => {
    setIsOpen(false);
  };
  return (
    <main className="flex  flex-col w-[100vw] px-4">
      <header className="text-4xl font-semibold text-black whitespace-nowrap ">
        People
      </header>
      <Header data={headerData} />
      <div className="mt-3.5 w-full border-solid border-[5px] border-zinc-100 min-h-[5px] " />
      <div className="z-10 shrink-0 mt-0 border-solid border-[5px] border-zinc-600 h-[5px] w-[71px]" />
      <div className="flex flex-wrap gap-5 justify-between mt-2.5 w-full max-md:mr-2">
        <div className="flex gap-2 self-start text-sm font-medium">
          <button className="overflow-hidden gap-4 self-stretch px-3.5 py-2 whitespace-nowrap bg-black rounded-[36px] text-zinc-100">
            Approved
          </button>
          <button className="overflow-hidden gap-4 self-stretch px-3.5 py-2 text-black bg-zinc-100 rounded-[36px]">
            Awaiting Approval
          </button>
        </div>
        <div className="flex flex-wrap gap-4 max-md:max-w-full">
          <p className="flex overflow-hidden flex-auto gap-4 px-6 py-2 text-sm font-medium bg-zinc-100 rounded-[32px] text-neutral-500 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fdb22fecc61aa4c90d85ba4668cfff11e6088645e0787d3950e9b70f7ccb812?placeholderIfAbsent=true&apiKey=ad70248d4b074c7c967774a3f08b8e2d"
              className="object-contain shrink-0 self-start w-3.5 aspect-square"
              alt="Nothing to show"
            />
            <input
              type="text"
              placeholder="Search by name or email"
              className="basis-auto bg-transparent border-none outline-none"
              aria-label="Search by name or email"
            />
          </p>
          <p className="flex  gap-2 self-start text-sm text-black ">
            <button className="flex gap-1.5 items-start px-2.5 py-2 whitespace-nowrap rounded bg-zinc-100 min-h-[30px] ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/89546f3e6656f08ff892cd2669da965e8b4b9f8832861bcf06d47bebd8dccbaf?placeholderIfAbsent=true&apiKey=ad70248d4b074c7c967774a3f08b8e2d"
                className="object-contain shrink-0 aspect-square w-[17px]"
                alt="Nothing to show"
              />
              <span className="w-10">Export</span>
            </button>
            <button className="sm:flex gap-1.5 items-start px-2.5 py-2 rounded bg-zinc-100 min-h-[30px] hidden ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d833d2b047d120c55309e3c71396a266d41f394060eca10e2666dcce3fc04e7?placeholderIfAbsent=true&apiKey=ad70248d4b074c7c967774a3f08b8e2d"
                className="object-contain shrink-0 aspect-square w-[17px]"
                alt="Nothing to show"
              />
              <span>Bulk Add</span>
            </button>
            <button className="flex gap-1.5 items-start px-2.5 py-2 whitespace-nowrap bg-gray-900 rounded min-h-[30px] text-zinc-100"
            onClick={openSheet}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a079b0d0e5554926af97c04b63c3dc5bccb6ca3b8e96720c84ce072d9c59de?placeholderIfAbsent=true&apiKey=ad70248d4b074c7c967774a3f08b8e2d"
                className="object-contain shrink-0 aspect-square w-[17px]"
                alt="Nothing to show"
              />
              <span>Add</span>
            </button>
          </p>
        </div>
      </div>
      <section className="flex overflow-hidden flex-col mt-3 w-full ">
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
        {headers && headers.map((header, index) => (
          <TableHead key={index} className="font-bold text-black">
            {capitalizeFirstLetter(header)}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody  key={tableKey}>
      {bodyData?.length>0 ? (
        bodyData.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            data-state={row.isSelected ? "selected" : null}
          >
            {console.log(bodyData)}
              <TableCell>
              <input
                type="checkbox"
                checked={row.isSelected}
                onChange={() => handleRowSelect(rowIndex)} 
              />
            </TableCell>
            {console.log(row)}
            {row.cells.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>
                {console.log(cell)}
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
        {/* {bodyData.length>0 && <CustomTable
          headers={headers}
          bodyData={bodyData}
          handleRowSelect={handleRowSelect}
          handleSelectAll={handleSelectAll}
          isAllSelected={isAllSelected}
          isSomeSelected={isSomeSelected}
        key={keytable}
        />} */}
      </section>
      <PopupForm isOpen={isOpen} onClose={closeSheet} />
    </main>
  );
};

export default People;
