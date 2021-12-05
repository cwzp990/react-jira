import React from "react"

export const SearchPannel = ({users, param, setParam}:any) => {
    const queryName = (evt: any) => {
        setParam({
            ...param,
            name: evt.target.value
        })
    }
    
    const queryNameId = (evt: any) => {
        setParam({
            ...param,
            personId: evt.target.value
        })
    }
    
    return <form action="">
        <input type="text" value={param.name} onChange={queryName} />
        <select value={param.personId} onChange={queryNameId}>
            <option value={""}>负责人</option>
            {users.map((user: any) => <option value={user.id} key={user.id}>{user.name}</option>
            )}
        </select>
    </form>
}