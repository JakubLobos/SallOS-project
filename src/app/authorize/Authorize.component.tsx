import { FC, useContext, useEffect, useState } from "react"
import getUsersRequest from "../../http/rest/users.service";
import UserProfile from "../../components/common/userprofile/UserProfile.components";
import GlobalStyle from "../../components/styles/Global.style";
import StyledAuthorize from "./Authorize.style";
import { UsersWrapper, Heading } from "./userswrapper/UsersWrapper.style";



const Authorize:FC = () => {

    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        async function retrieveUsers() {
            let newUsers = await getUsersRequest();
            setUsers(newUsers);
        };
            retrieveUsers();
    }, [])

    return (
        <>
            <GlobalStyle />
            <StyledAuthorize>
                <UsersWrapper>
                <Heading fontsize={60}>Choose your account</Heading>
                    {
                        users.map((user) => <UserProfile
                            user={user} //tu przekazuje usera do komponentu <UserProfile>
                            key={user.id}
                            username={user.username}
                            name={user.name}
                        />)
                        
                    }
                </UsersWrapper>
            </StyledAuthorize>
        </>
    )
}

export default Authorize;