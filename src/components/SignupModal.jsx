import { useEffect, useState } from 'react';

export default function SignupModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const toggle = () => setOpen(o => !o);
    window.addEventListener('toggle-signup-modal', toggle);
    return () => window.removeEventListener('toggle-signup-modal', toggle);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    console.log('Signing up with email:', email);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-2">Get Early Access</h2>
        <p className="text-gray-600 mb-4 text-sm">
          Leave your email and we'll reach out once we extend the beta to more users.
        </p>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="you@example.com"
            />
          </label>
          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
