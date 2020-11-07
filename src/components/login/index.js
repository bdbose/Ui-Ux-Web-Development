import React from 'react';
import './style.css';

const Login = () => {
	return (
		<div className='login-wrapper'>
			<div className='page-div'>
				<div className='login'>
					<div className='title'>
						Rep<span style={{ color: '#4263EC' }}>suite</span>.
					</div>
					<form>
						<div className='form-header'>Hey There 🖐</div>
						<div className='form-header-sub'>
							Welcome back to Rep<span style={{ color: '#4263EC' }}>suite</span>
							.
						</div>
						<span className='label'>Email</span>
						<input type='email' placeholder='Enter email...' />
						<span className='label'>Password</span>
						<input type='password' placeholder='Password...' />
						<span className='label-sub'>
							Use 8 or more characters to make a strong password
						</span>
						<button
							onClick={(e) => {
								e.preventDefault();
								window.location.replace('/home');
							}}>
							Sign In
						</button>
						<span className='label-signin'>
							New user?<span style={{ color: '#4263EC' }}>Signup instead</span>
						</span>
						<div className='alt'>
							<span>Or continue with</span>
						</div>
					</form>
					<div className='goofb'>
						<img src='/assets/google.svg' alt='google' />
						<img src='/assets/facebook.svg' alt='fb' />
					</div>
				</div>
				<div className='landing'>
					<img src='/assets/landing.svg' alt='landing' />
					<ul>
						<li>Fully Automated Comment Moderation</li>
						<li>Take a backseat while we automate your repo</li>
						<li>Start with a free trial</li>
						<li>Best SAAS in the industry</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Login;
