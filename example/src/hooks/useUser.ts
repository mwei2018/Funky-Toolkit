import { useState, useEffect } from 'react';
import { userApi } from '../services/http';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export function useUser() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await userApi.getProfile();
      setProfile(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      setLoading(true);
      const response = await userApi.updateProfile(data);
      setProfile(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,
    loading,
    error,
    updateProfile,
    refresh: fetchProfile,
  };
} 