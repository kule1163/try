import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { Button } from "@mui/material";
import PasswordChange from "./passwordChange/PasswordChange";
import ProfileEditForm from "./profileEditForm/ProfileEditForm";
import Spinner from "../../components/spinner/Spinner";

const ProfileEdit = () => {
  const [editToggle, setEditToggle] = useState<boolean>(true);
  const { editStatus, changeStatus } = useAppSelector((state) => state.auth);

  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      {user && (
        <div className="max">
          <div className="log-reg-container">
            {true ? (
              <div className="spinner-box">aaaaaaaaaa</div>
            ) : (
              <div className="log-reg-box">
                {editToggle ? <ProfileEditForm /> : <PasswordChange />}
                <Button onClick={() => setEditToggle((prev) => !prev)}>
                  {editToggle ? "change password" : "edit profile"}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileEdit;
