import { useState } from "react";

export const useProfile = () => {
  const [profile, setProfile] = useState(() => {
    const profile = window.localStorage.getItem("profile");
    return profile ? JSON.parse(profile) : {};
  });
  const setUser = (profile) => {
    setProfile(profile);
    window.localStorage.setItem("profile", JSON.stringify(profile));
  };
  return [profile, setUser];
};

export default useProfile;

