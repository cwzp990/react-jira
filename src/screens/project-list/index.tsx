import {List} from './list'
import {SearchPannel} from './search-pannel'
import { useEffect, useState } from "react"
import { get } from '../../utils/request'
import { useList } from '../../utils/hooks'

export const ProjectList = () => {
    const [param, setParam] = useState({
        name: '',
        personId: '',
    })
    
    const [users, setUsers] = useState([])
    const {data: list, isLoading, error} = useList(param)

    useEffect(() => {
        get('/users').then((res: any) => {
            setUsers(res)
        })
    }, [])

    return (
        <div>
            <SearchPannel users={users} param={param} setParam={setParam} />
            <List dataSource={list} users={users} loading={isLoading} isError={error} />
        </div>
    )
}
