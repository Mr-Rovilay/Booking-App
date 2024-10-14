import { useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { url } from '../App';

const VerifyEmail = () => {
    const [code, setCode] = useState(new Array(6).fill(""));
    const [isLoading, setIsLoading] = useState(false);
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        setCode(prevCode => {
            const newCode = [...prevCode];
            newCode[index] = element.value;
            return newCode;
        });

        // Automatically move to the next input box
        if (element.value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        
        if (!/^\d+$/.test(pastedData)) {
            toast.error('Please paste only numeric digits');
            return;
        }

        const newCode = [...code];
        for (let i = 0; i < pastedData.length; i++) {
            newCode[i] = pastedData[i];
            if (inputRefs.current[i]) {
                inputRefs.current[i].value = pastedData[i];
            }
        }
        setCode(newCode);

        // Focus on the next empty input or the last input if all are filled
        const nextEmptyIndex = newCode.findIndex(digit => digit === "");
        if (nextEmptyIndex !== -1) {
            inputRefs.current[nextEmptyIndex].focus();
        } else {
            inputRefs.current[5].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // Move to previous input on backspace if current field is empty
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const verificationCode = code.join("");

        if (verificationCode.length === 6) {
            setIsLoading(true);
            try {
                const response = await axios.post(`${url}/api/auth/verify-email`, {
                    code: verificationCode
                });
                
                if (response.data.success) {
                    // Assuming you have a function to update global state
                    // updateAuthState({ user: response.data.user, isAuthenticated: true });

                    toast.success(response.data.message);
                    navigate('/');
                } else {
                    toast.error(response.data.message || 'Email verification failed. Please try again.');
                }
            } catch (error) {
                if (error.response?.status === 400) {
                    toast.error(error.response.data.message || 'Invalid or expired verification code');
                } else {
                    toast.error('Server error. Please try again later.');
                }
            } finally {
                setIsLoading(false);
            }
        } else {
            toast.error('Please enter a valid 6-digit code');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-center">Verify Your Email</h2>
                <p className="mb-4 text-center text-gray-600">
                    We&apos;ve sent a 6-digit code to your email. Enter it below to verify.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className="flex mb-6 space-x-2">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                ref={el => inputRefs.current[index] = el}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={handlePaste}
                                className="w-12 h-12 text-xl text-center transition border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full px-4 py-2 font-bold text-white transition rounded bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:opacity-50"
                    >
                        {isLoading ? 'Verifying...' : 'Verify Email'}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-gray-500">
                        Didn&apos;t receive a code?{' '}
                        <button
                            type="button"
                            onClick={() => toast('Resending code...', { icon: '📨' })}
                            className="font-semibold text-secondary hover:text-secondary-dark"
                        >
                            Resend
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;