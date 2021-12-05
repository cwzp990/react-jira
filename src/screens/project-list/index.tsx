import {List} from './list'
import {SearchPannel} from './search-pannel'
import { useEffect, useState } from "react"
import { get } from '../../utils/request'

export const ProjectList = () => {
    const [param, setParam] = useState({
        name: '',
        personId: '',
    })
    
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        get('/users').then((res: any) => {
            setUsers(res)
        })
    }, [])

    useEffect(() => {
        get('/projects', param).then((res: any) => {
            setList(res)
        })
    }, [param])

    return (
        <div>
            <SearchPannel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    )
}
