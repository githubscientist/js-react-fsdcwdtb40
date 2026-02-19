const Child3 = ({ user }) => {

    return (
        <>
            <p>Welcome {user.email != '' ? user.email : 'Guest'}!</p>
        </>
    )
}

export default Child3;