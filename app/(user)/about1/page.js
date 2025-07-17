"use client";
import Link from 'next/link';
import { useEffect } from 'react';
const UserAbout=()=>{
      useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('role');
    if (!isLoggedIn || role !== 'user') {
      window.location.href = '/loginn';
    }
  }, []);
    return(
        <div className="container">
       <h2>About Us</h2>
      <p>We are a user-first platform dedicated to providing personalized content and secure account management. Our mission is to make your experience seamless and enjoyable.</p>
      <div className="nav">
        <Link href="/home">Home</Link>
        <Link href="/setting">Settings</Link>
        <Link href="/loginn">Logout</Link>
      </div>
    </div>
    )
}
export default UserAbout;