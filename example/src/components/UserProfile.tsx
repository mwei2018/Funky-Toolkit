import React from 'react';
import { useUser } from '../hooks/useUser';
import { Button } from '@funky/ui';

export function UserProfile() {
  const { profile, loading, error, updateProfile } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!profile) {
    return <div>No profile found</div>;
  }

  const handleUpdate = async () => {
    await updateProfile({
      name: 'New Name',
      email: 'new@example.com',
    });
  };

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        {profile.avatar && <img src={profile.avatar} alt="Avatar" />}
      </div>
      <Button onClick={handleUpdate}>Update Profile</Button>
    </div>
  );
} 