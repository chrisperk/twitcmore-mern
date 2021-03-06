import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

const Login = props => {
    return (
        <div 
            className={props.isShown ? "modal-wrapper active" : "modal-wrapper"}
            onClick={e => props.handleToggleModal(e)}>
            <div className={props.isShown ? "modal active" : "modal"}>
                <span 
                    className="close-button"
                    aria-label="Close Login Modal"
                    onClick={e => props.handleToggleModal(e)}>
                    &times;
                </span>
                <h1>Login</h1>
                {props.activeUsername ?
                    <div>
                        You're logged in as {props.activeUsername}&nbsp;
                        <span
                            className="link-button"
                            onClick={() => props.handleLogout()}>
                            (Logout)
                        </span>
                    </div> :
                    <form 
                        className="auth-form" 
                        onSubmit={e => props.handlePostCredentials(
                            e,
                            {
                                username: props.usernameInput,
                                password: props.passwordInput
                            }
                        )}>
                        <input 
                            type="text"
                            id="login-username"
                            name="username"
                            placeholder="Username" 
                            value={props.usernameInput} 
                            onChange={e => props.handleChangeUsername(e.target.value)} />
                        <input 
                            type="password"
                            id="login-password"
                            name="password"
                            placeholder="Password" 
                            value={props.passwordInput} 
                            onChange={e => props.handleChangePassword(e.target.value)} />
                        <button 
                            type="submit"
                            className="submit-button">
                            Submit
                        </button>
                    </form>
                }
            </div>
        </div>
    );
};

Login.propTypes = {
    isShown: PropTypes.bool.isRequired,
    usernameInput: PropTypes.string,
    usernamePassword: PropTypes.string,
    isSubmitting: PropTypes.bool.isRequired,
    error: PropTypes.object,
    activeUsername: PropTypes.string,
    handleToggleModal: PropTypes.func,
    handleChangeUsername: PropTypes.func,
    handleChangePassword: PropTypes.func,
    handlePostCredentials: PropTypes.func,
    handleLogout: PropTypes.func
};

export default Login;