import Link from 'next/link';
import SignUp from '../../../components/SignUp';


export default function SignUpPage() {
    return (
        <div>
            <h1>Signup Page</h1>
            {/* Signup form */}
            <SignUp />

            <p>Already have an account?
                <Link href="/users/login">
                    Login here
                </Link>
            </p>
        </div>
    );
}