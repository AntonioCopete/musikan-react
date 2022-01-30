import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateUserInfo } from "../../../../redux/auth/actions";

import { Box } from "@mui/material";
import { SectionTitle, Input, SaveButton, CancelButton } from "./ProfileForm.styles";

function ProfileForm() {
  const { userName, email } = useSelector(state => state.auth.currentUser)
  const [userDifference, setUserDifference] = useState()
  const navigate = useNavigate()
  const userNameInput = useRef()
  const emailInput = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    if (userDifference === null) return

    dispatch(updateUserInfo(userDifference))
    setUserDifference(null)
  }, [dispatch, userDifference])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUserName = userNameInput.current.value
    const newEmail = emailInput.current.value

    if ((newUserName !== userName &&  newUserName !== "") || (newEmail !== email &&  newEmail !== "")) {
      const changes = {}
      if (newUserName !== userName) {changes.userName = newUserName}
      if (newEmail !== email) {changes.email = newEmail}
      setUserDifference(changes)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <SectionTitle>Edit profile</SectionTitle>
      <div>
        <i className="fas fa-user"></i>
        <Input type="text" defaultValue={userName} ref={userNameInput} />
      </div>
      <div>
        <i className="fas fa-envelope"></i>
        <Input type="email" defaultValue={email} ref={emailInput} />
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <CancelButton onClick={() => {navigate(-1)}} >Cancel</CancelButton>
        <SaveButton type="submit" >Save</SaveButton>
      </Box>
    </form>
  );
}

export default ProfileForm;
