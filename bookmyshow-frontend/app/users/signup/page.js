import Link from 'next/link';
import SignUp from '../../../components/SignUp';

export default function SignUpPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Signup Page</h1>
            
            {/* Signup form */}
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <SignUp />
            </div>

            <p className="mt-4 text-center text-gray-700">
                Already have an account?{" "}
                <Link href="/users/login" className="text-blue-500 hover:text-blue-700">
                    Login here
                </Link>
            </p>
        </div>
    );
}
