import {Table} from 'antd'

export const List = ({users, ...props}: any) => {

    const columns = [{
        title: '名称',dataIndex: 'name',key: "name",},{title: '负责人',dataIndex: 'personId',key: 'personId',render: (id: number) => users?.find((user: any) => user.id === id)?.name
    }]
    
    return (
        <Table columns={columns} {...props} />
    )
}