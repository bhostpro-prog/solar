import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabase/client';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { Lock, Mail } from 'lucide-react';

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
        setLoading(false);
        return;
      }

      navigate('/admin');
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd`;
      
      const res = await fetch(`${baseUrl}/admin/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || 'Signup failed');
        setLoading(false);
        return;
      }

      // After successful signup, log in
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError('Account created! Please log in.');
        setIsSignup(false);
        setLoading(false);
        return;
      }

      navigate('/admin');
    } catch (err) {
      setError('An error occurred during signup');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#228b22] to-[#1a6b1a] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#228b22] w-16 h-16 rounded-full flex items-center justify-center">
              <Lock className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-3xl mb-2">CMS Admin</h1>
          <p className="text-gray-600">
            {isSignup ? 'Create your admin account' : 'Sign in to manage content'}
          </p>
        </div>

        <form onSubmit={isSignup ? handleSignup : handleLogin} className="space-y-6">
          {isSignup && (
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={isSignup}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228b22]"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228b22]"
                placeholder="admin@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228b22]"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#228b22] text-white py-3 rounded-lg hover:bg-[#1a6b1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Please wait...' : isSignup ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setError('');
            }}
            className="text-[#228b22] hover:underline"
          >
            {isSignup
              ? 'Already have an account? Sign in'
              : "Don't have an account? Sign up"}
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => navigate('/')}
            className="w-full text-gray-600 hover:text-gray-900"
          >
            ← Back to Website
          </button>
        </div>
      </div>
    </div>
  );
}