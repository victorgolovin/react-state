import React from 'react'


const Logs = ({ logs }) => {

    return (
        <div>
            <h2>Logs:</h2>
            { logs.map(log => (
                <div key={log.id}> {/* key={log.id} это уникальный ключ для каждого элемента списка в реакте */}
                    <p>Действие: {log.action}</p>
                    <p>Предыдущее значение: {log.prevValue}</p>
                    <p>Значение: {log.value}</p>
                </div>
            )) }
        </div>
    )
}

export default Logs