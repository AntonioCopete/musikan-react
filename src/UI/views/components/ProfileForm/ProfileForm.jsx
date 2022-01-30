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
  const oldPasswordRef = useRef()
  const newPasswordRef = useRef()
  const confirmPasswordRef = useRef()
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
    const newPassword = newPasswordRef.current.value
    const oldPassword = oldPasswordRef.current.value
    const confirmPassword = confirmPasswordRef.current.value

    if ((newUserName !== userName &&  newUserName !== "") || (newEmail !== email &&  newEmail !== "") || (oldPassword !== "" && oldPassword.length >= 6 &&  newPassword === confirmPassword &&  newPassword !== oldPassword) ) {
      const changes = {}
      if (newUserName !== userName) {changes.userName = newUserName}
      if (newEmail !== email) {changes.email = newEmail}
      if (oldPassword !== "") {changes.password = newPassword}
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
      <SectionTitle>Change password</SectionTitle>
      <div>
        <i className="fas fa-lock"></i>
        <Input type="password" ref={oldPasswordRef} placeholder="Old password" />
      </div>
      <div>
        <i className="fas fa-lock"></i>
        <Input type="password" ref={newPasswordRef} placeholder="New password" />
      </div>
      <div>
        <i className="fas fa-lock"></i>
        <Input type="password" ref={confirmPasswordRef} placeholder="Confirm password" />
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <CancelButton onClick={() => {navigate(-1)}} >Cancel</CancelButton>
        <SaveButton type="submit" >Save</SaveButton>
      </Box>
    </form>
  );
}

export default ProfileForm;
