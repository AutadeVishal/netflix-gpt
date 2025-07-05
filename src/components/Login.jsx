import React, { Suspense, useState, useRef } from 'react';
const Header = React.lazy(() => import('./Header'));
import { netFlixBackground, userIcon } from '../assets/images';
import { useDispatch, useSelector } from 'react-redux';
import checkValidData from '../utils/validate';
import { auth } from '../utils/firebase';
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { lang } from '../assets/languageConstants';
import { addUser } from '../utils/userSlice';
import { changeLanguage } from '../utils/configSlice';

const Login = () => {
  const dispatch = useDispatch();
  const currLanguage = useSelector((store) => store.config.lang);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleButtonClicked = () => {
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const message = checkValidData(email, password);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() =>
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
            photoURL: userIcon,
          })
        )
        .then(() => {
          const u = auth.currentUser;
          dispatch(
            addUser({
              uid: u.uid,
              email: u.email,
              displayName: u.displayName,
              photoURL: u.photoURL,
            })
          );
          dispatch(changeLanguage('English'));
        })
        .catch((err) => setErrorMessage(err.message));
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => dispatch(changeLanguage('English')))
        .catch((err) => setErrorMessage(err.message));
    }
  };

  const toggleSignInForm = () => setIsSignInForm((prev) => !prev);

  return (
    <div className="relative w-screen h-screen">
      {/* Background image */}
      <img
        src={netFlixBackground}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Header */}
      <Suspense fallback={<div className="text-white p-4">Loading…</div>}>
        <Header />
      </Suspense>

      {/* Glass-style form */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div
          className="
            w-full max-w-md p-8 space-y-4
            bg-white/20 backdrop-blur-lg
            border border-white/30 rounded-2xl
            shadow-xl
          "
        >
          <h1 className="text-3xl font-extrabold text-white text-center">
            {isSignInForm
              ? lang[currLanguage].signIn
              : lang[currLanguage].register}
          </h1>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {!isSignInForm && (
              <input
                ref={nameRef}
                type="text"
                placeholder={lang[currLanguage].fullName || 'Full Name'}
                className="
                  w-full p-3 rounded-md
                  bg-white/80 text-black
                  focus:outline-none focus:ring-2
                  focus:ring-red-500
                "
              />
            )}

            <input
              ref={emailRef}
              type="email"
              placeholder={lang[currLanguage].emailPlaceholder || 'Email'}
              className="
                w-full p-3 rounded-md
                bg-white/80 text-black
                focus:outline-none focus:ring-2
                focus:ring-red-500
              "
            />

            <input
              ref={passRef}
              type="password"
              placeholder={lang[currLanguage].passwordPlaceholder || 'Password'}
              className="
                w-full p-3 rounded-md
                bg-white/80 text-black
                focus:outline-none focus:ring-2
                focus:ring-red-500
              "
            />

            {errorMessage && (
              <p className="text-red-400 text-sm font-medium">
                {errorMessage}
              </p>
            )}

            <button
              type="button"
              onClick={handleButtonClicked}
              className="
                w-full py-3 mt-2 rounded-md
                bg-red-600 hover:bg-red-700
                text-white font-bold
                transition
              "
            >
              {isSignInForm
                ? lang[currLanguage].signIn
                : lang[currLanguage].register}
            </button>
          </form>

          <div className="flex justify-center items-center text-sm text-white">
            <span>
              {isSignInForm
                ? lang[currLanguage].newToNetflix
                : lang[currLanguage].alreadyHaveAccount}
            </span>
            <button
              onClick={toggleSignInForm}
              className="ml-2 text-red-500 font-semibold hover:underline"
            >
              {isSignInForm
                ? lang[currLanguage].register
                : lang[currLanguage].login}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;