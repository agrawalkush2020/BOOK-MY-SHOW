"use client";
import Link from 'next/link';
import SignUp from '../../../components/SignUp';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            {/* Home Button */}
            <div className="w-full flex justify-start p-4">
                <button
                    onClick={() => router.push("/")}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Home
                </button>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-6">Signup Page</h1>

            {/* Signup form */}
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
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
