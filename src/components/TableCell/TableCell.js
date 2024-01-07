import React from 'react';
import classNames from 'classnames';

const TableCell = ({ children, isButton }) => {
  const baseClass = "p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent";
  const tdClass = isButton
    ? `${baseClass} text-sm leading-normal text-center`
    : baseClass;

  const spanClass = classNames('px-2 text-xs inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none', {
    'bg-gradient-to-tl bg-teal-400 rounded-xl py-2 text-white': isButton && children !== 'Waiting' && children !== 'Closed',
    'text-grayLight': !isButton,
    'text-red-500': children === 'Closed',
    'text-green-500': children === 'Waiting'
  });

  return (
    <td className={tdClass}>
      <span className={spanClass}>
        {children}
      </span>
    </td>
  );
};
export default TableCell;