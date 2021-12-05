export const List = ({users, list}: any) => {

    const findName = (id: number) => users.find((user: any) => user.id === id)?.name
    return (
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {list.map((row: any) => <tr key={row.id}>
                    <td>{row.name}</td>
                    <td>{findName(row.personId)}</td>
                </tr>)}
            </tbody>
        </table>
    )
}