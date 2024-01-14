import React, { useEffect, useMemo, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Box from "../Box/Box";
import { GoSortDesc } from "react-icons/go";
import { BsSortUp } from "react-icons/bs";
import Input from "../Input/Input";
import Title from "../Common/Title/Title";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import {sortData} from "../../utils/sortDataTable";

const UniversalTable = ({
  headers,
  data,
  actions,
  withCheckboxes,
  withAddButton,
  nameTable,
  onAddButtonClick,
}) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  //sorted data
  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = useMemo(() => sortData(data, sortConfig), [data, sortConfig]);

  const handleCheckAll = () => {
    setIsAllChecked(!isAllChecked);
  };
  return (
    <Box>
      {withAddButton && (
        <div className="p-6 pb-0 mb-5 border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex justify-between items-center">
          <Title tag="h5">{nameTable}</Title>
          <Button onClick={onAddButtonClick}>Add truck</Button>
        </div>
      )}

      <div className="flex-auto px-0 pt-0 pb-2 ">
        <div className="p-0 overflow-x-auto md:overflow-visible">
          <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
            <thead>
              <tr>
                {withCheckboxes && (
                  <th className="px-6 py-3 font-bold uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-gray opacity-70 text-center">
                    <Input
                      type="checkbox"
                      onChange={handleCheckAll}
                      checked={isAllChecked}
                    />
                  </th>
                )}
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="cursor-pointer px-6 py-3 font-extrabold uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-gray opacity-70 text-center"
                    onClick={() => requestSort(header)}
                  >
                    <div className="flex items-center justify-center">
                      {header}
                      {sortConfig && sortConfig.key === header ? (
                        sortConfig.direction === "ascending" ? (
                          <GoSortDesc />
                        ) : (
                          <BsSortUp />
                        )
                      ) : null}
                    </div>
                  </th>
                ))}
                {actions && (
                  <th className="px-6 py-3 font-bold uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-gray opacity-70 text-center">
                    actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td
                    colSpan={
                      headers.length +
                      (withAddButton ? 1 : 0) +
                      (withCheckboxes ? 1 : 0)
                    }
                  >
                    <div className="w-full flex justify-center">
                      <Loading />
                    </div>
                  </td>
                </tr>
              ) : (
                <TransitionGroup component={null}>
                  {sortedData.map((row, index) => (
                    <CSSTransition key={index} timeout={500} classNames="item">
                      <tr>
                        {withCheckboxes && (
                          <td className="px-6 py-3 font-bold uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-gray opacity-70 text-center">
                            <Input type="checkbox" checked={isAllChecked} />
                          </td>
                        )}
                        {row &&
                          typeof row === "object" &&
                          Object.entries(row).map(([key, value], index) => {
                            if (key === 'id') return null; // pomiń klucz 'id'
                            return (
                              <td
                                key={index}
                                className={`px-6 py-3 font-bold uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-gray opacity-70 text-center 
                                ${key === "Status" && value === "Closed" ? "text-red-500" : ""}
                                ${
                                  key === "Status" && value === "Waiting"
                                    ? "text-green-500"
                                    : ""
                                }
                              `}
                              >
                                {value}
                              </td>
                            );
                          })}
                        {actions && (
                          <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent text-center">
                            {actions.map((action, actionIndex) => (
                              <Button
                                key={actionIndex}
                                onClick={() => action.onClick(row.id)}
                              >
                                {action.label}
                              </Button>
                            ))}
                          </td>
                        )}
                      </tr>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );
};

export default UniversalTable;
