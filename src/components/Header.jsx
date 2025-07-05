import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import { supportedLanguages, lang } from '../assets/languageConstants';
import { netFlixLogo } from '../assets/images';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const currLanguage = useSelector((store) => store.config.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth).then(() => dispatch(removeUser()));
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-40
        flex items-center justify-between
        px-6 py-4
        bg-black/50 backdrop-blur-md
        border-b border-white/20
      "
    >
      <Link to="/browse">
        <img src={netFlixLogo} alt="Netflix Logo" className="h-10 w-auto" />
      </Link>

      {user && (
        <div className="flex items-center gap-4">
          {/* Language selector */}
          <div className="relative">
            <select
              value={currLanguage}
              onChange={handleLanguageChange}
              className="
                appearance-none
                bg-transparent text-white
                py-2 px-3 pr-8
                border border-white/30
                rounded-lg
                focus:outline-none focus:ring-2 focus:ring-red-500
              "
            >
              {supportedLanguages.map((l) => (
                <option
                  key={l.identifier}
                  value={l.identifier}
                  className="bg-black text-white"
                >
                  {l.identifier}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white/70">
              ▼
            </div>
          </div>

          {/* Toggle GPT Search */}
          <button
            onClick={handleGPTSearchClick}
            className="
              bg-red-600 hover:bg-red-700
              text-white px-4 py-2
              rounded-lg transition
            "
          >
            {lang[currLanguage].gptSearchButton}
          </button>

          {/* User avatar */}
          <img
            src={user.photoURL}
            alt={user.displayName || 'User'}
            className="h-10 w-10 rounded-full border-2 border-white/50"
          />

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="
              bg-white/20 hover:bg-white/30
              text-white px-4 py-2
              rounded-lg transition
            "
          >
            {lang[currLanguage].signOut}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;