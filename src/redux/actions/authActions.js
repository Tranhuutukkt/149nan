import * as type from "../constants";

export const signIn = (email, password) => ({
    type: type.SIGNIN,
    payload: {
        email,
        password
    }
});

export const signUp = (user) => ({
    type: type.SIGNUP,
    payload: user
});

export const signInSuccess = (auth) => ({
    type: type.SIGNIN_SUCCESS,
    payload: auth
});

export const setAuthPersistence = () => ({
    type: type.SET_AUTH_PERSISTENCE
});

export const signOut = () => ({
    type: type.SIGNOUT
});

export const signOutSuccess = () => ({
    type: type.SIGNOUT_SUCCESS
});

export const onAuthStateChanged = () => ({
    type: type.ON_AUTHSTATE_CHANGED
});

export const onAuthStateSuccess = (user) => ({
    type: type.ON_AUTHSTATE_SUCCESS,
    payload: user
});

export const onAuthStateFail = (error) => ({
    type: type.ON_AUTHSTATE_FAIL,
    payload: error
});

export const resetPassword = (email) => ({
    type: type.RESET_PASSWORD,
    payload: email
});

export const mailVerified = () => ({
    type: type.MAIL_VERIFIED
})

