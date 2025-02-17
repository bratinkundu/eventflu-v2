export default function LoginPage() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-secondary">
        <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Section (Login Form) */}
          <div className="w-1/2 p-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Welcome back</h2>
            <p className="text-lg text-gray-600 mb-6">Login to your Eventflu account</p>
          </div>
            
            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="m@example.com" className="w-full border border-gray-300 text-black rounded-lg p-2 mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" placeholder="********" className="w-full border border-gray-300 text-black rounded-lg p-2 mt-1" />
              </div>
              <div className="flex justify-between text-sm">
                <a href="#" className="text-gray-500">Forgot your password?</a>
              </div>
              <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-gray-900">Login</button>
            </form>
  
            {/* Social Login */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">Or continue with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
  
            <div className="flex">
              <button className="flex-1 border p-2 rounded-lg flex items-center justify-center">
                <span>Google</span>
              </button>
            </div>
  
            <p className="text-center text-sm text-gray-500 mt-4">
              Don’t have an account? <a href="/auth/register" className="text-blue-500">Sign up</a>
            </p>
          </div>
  
          {/* Right Section (Image Placeholder) */}
          <div className="w-1/2 bg-gray-100 flex items-center justify-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
              🖼️
            </div>
          </div>
        </div>
      </div>
    );
  }
  