import { FC } from "react";
import { useSession } from "../../../utilities/globalzustandstates/SessionState";
import CategoryHeading from "../../common/categoryheading/CategoryHeading.component";
import StyledMyPofile from "./MyProfile.style";

const MyProfile:FC = () => {

    const { sessionUser } = useSession();

    return (
        <StyledMyPofile>
            <p className="alert">Check your user data in this component, sadly you can't edit below values. Source: http://jsonplaceholder.typicode.com/users</p>
            <section>
                <CategoryHeading content={"User"} />
                <h3>Username: { sessionUser.username }</h3>
                <p>fullname {sessionUser.name}</p>
                <p>email: {sessionUser.email}</p>
                <p>address:  { sessionUser.address.city },  { sessionUser.address.zipcode }, { sessionUser.address.street }</p>
            </section>
            <section>
                <CategoryHeading content={"Company"} />
                <h3>Name: { sessionUser.company.name }</h3>
                <p>Phrase: {sessionUser.company.catchPhrase}</p>
                <p>bs: {sessionUser.company.bs}</p>
                <p>Website: { sessionUser.website }</p>
            </section>
            <section>
                <CategoryHeading content={"Dangerous"} />
                <h3>Delete account</h3>
                <p className="delete_account_desc"> Warning, the account will be deleted permanently it means forever! That's a really long time! </p>
                <button className="delete_account_btn" onClick={() => {
                    window.alert("*Puff!*, This option doesn't works :D")
                }}> Delete account </button>
            </section>
        </StyledMyPofile>
    )
}

export default MyProfile;