"use client";
import Link from 'next/link';
import { useEffect } from 'react';

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('role');
    if (!isLoggedIn || role !== 'user') {
      window.location.href = '/loginn';
    }
  }, []);
const UserSetting=()=>{
    return(
        <div className="container">
       <h2>User Settings</h2>
      <p>Here you can update your profile details, change your password, and manage notification preferences.</p>
      <div className="nav">
        <Link href="/home1">Home</Link>
        <Link href="/about1">About Us</Link>
        <Link href="/loginn">Logout</Link>
      </div>
      </div>
    )
}
export default UserSetting;