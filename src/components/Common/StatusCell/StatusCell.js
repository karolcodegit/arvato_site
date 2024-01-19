const StatusCell = ({ status }) => {
    let statusColor = ` `;
    if(status === 'Waiting'){
        statusColor = 'bg-yellow-500 text-white'
    }else if(status === 'Closed'){
        statusColor = 'bg-red-500 text-red-500/60'
    }




    else if(status === 'Admin'){
        statusColor = 'bg-red-500 text-white'
    }

    return <span className={`${statusColor} px-3 py-2 rounded-md font-bold shadow-md`}>{status}</span>
}

export default StatusCell