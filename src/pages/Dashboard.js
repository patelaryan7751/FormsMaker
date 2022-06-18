import { useState } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Sidebar from "../components/Sidebar";

export default function Dashbaord() {
  const logout = async () => {
    await signOut(auth);
  };
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div>
      <Sidebar />

      <div className="flex-1 w-full mx-2">
        Hi User {user?.email}
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
