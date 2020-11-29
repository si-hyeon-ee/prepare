import React, { useCallback } from 'react'
import { Card, Avatar, Button } from 'antd'

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false)
    }, [])
    return (
        <Card actions={[
            <div key="twit">짹짹 <br /> 0</div>,
            <div key="followings">팔로잉 수 <br /> 0</div>,
            <div key="followers">팔로워 수 <br /> 0</div>
        ]}>
            <Card.Meta title="nodeBird" avatar={<Avatar>nB</Avatar>}></Card.Meta>
            <Button onClick={onLogOut}> 로그아웃</Button>
        </Card>
    )
}



export default UserProfile