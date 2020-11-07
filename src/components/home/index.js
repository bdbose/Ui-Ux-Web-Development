import React from 'react';
import './style.css';

const Home = () => {
	return (
		<div className='home-wrapper'>
			<div className='home-main'>
				<div className='nav'>
					<div className='title'>
						Rep<span style={{ color: '#4263EC' }}>suite</span>.
					</div>
					<div className='nav-settings'>
						<img src='/assets/wardrobe.svg' className='logo' alt='settings' />
						<img src='/assets/setting.svg' className='logo' alt='settings' />
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<img src='/assets/stock.png' className='stock' alt='stock' />
							<div
								className='profile'
								style={{
									display: 'flex',
									flexDirection: 'column',
									padding: '10px 0',
								}}>
								<span>Profile</span>
								<span style={{ color: 'black', fontSize: '20px' }}>
									Rachna Ranade
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='container'>
					<div>
						<div className='side-bar'>
							<span className='side-title'>Pages and Channels</span>
							<ul className='pages'>
								<li>
									<img src='/assets/check.svg' alt='' />
									Rachna Ranade <img src='/assets/play-button.svg' alt='' />
								</li>
								<li>
									<img src='/assets/check.svg' alt='' />
									Rachna Ranade <img src='/assets/instagram.svg' alt='' />
								</li>
								<li>
									{/* <img src='/assets/check.svg' alt='' /> */}
									<input type='checkbox' />
									Rachna Ranade <img src='/assets/facebook.svg' alt='' />
								</li>
								<li>
									<img src='/assets/check.svg' alt='' />
									Rachna Ranade <img src='/assets/instagram.svg' alt='' />
								</li>
							</ul>
							<span className='side-title'>Status</span>
							<ul className='status'>
								<li>
									<input type='checkbox' />
									Required Manual Action
								</li>
								<li>
									<input type='checkbox' />
									Marked as safe by:
									<ul>
										<li>
											<input type='checkbox' />
											Manual Action
										</li>
										<li>
											<input type='checkbox' />
											AL
										</li>
									</ul>
								</li>
								<li>
									<input type='checkbox' />
									Hidden by:
									<ul>
										<li>
											<input type='checkbox' />
											Manual Action
										</li>
										<li>
											<input type='checkbox' />
											AL
										</li>
										<li>
											<input type='checkbox' />
											Keywords
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className='plan'>
							<span className='side-title'>Plan Usage</span>
							<div style={{ margin: '20px 0' }}>
								<span>Account Connected</span>
								<div className='bar1'>
									<div style={{ width: '66%' }} />
									<div />
								</div>
							</div>
							<div style={{ margin: '20px 0' }}>
								<span>Comments Processed</span>
								<div className='bar2'>
									<div style={{ width: '50%' }} />
									<div />
								</div>
							</div>
						</div>
					</div>
					<div className='feed'>
						<div className='notif'>
							<div className='date'>
								Date Range:
								<select>
									<option>Last 7 Days</option>
								</select>
							</div>
							<div className='box'>
								<div>
									<span>Require manual Action</span>
									<span
										style={{
											color: 'black',
											fontSize: '25px',
											fontWeight: '600',
										}}>
										34
									</span>
								</div>
								<img src='/assets/excla.svg' alt='excla' />
							</div>
							<div className='box'>
								<div>
									<span>Marked as Safe</span>
									<span
										style={{
											color: 'black',
											fontSize: '25px',
											fontWeight: '600',
										}}>
										128
									</span>
								</div>
								<img src='/assets/Group18.svg' alt='tick' />
							</div>
							<div className='box'>
								<div>
									<span>Hidden</span>
									<span
										style={{
											color: 'black',
											fontSize: '25px',
											fontWeight: '600',
										}}>
										128
									</span>
								</div>
								<img src='/assets/hide.svg' alt='excla' />
							</div>
						</div>

						<div style={{ display: 'flex' }}>
							<div className='feeds'>
								<div className='feed-container'>
									<div style={{ display: 'flex', alignItems: 'center' }}>
										<img src='/assets/prof2.png' alt='' />
										<div
											style={{
												marginLeft: '10px',
												display: 'flex',
												flexDirection: 'column',
											}}>
											<span
												style={{
													color: '#5565B9',
													fontSize: '25px',
													fontWeight: '600',
												}}>
												Prayag Mukhi
											</span>
											<span>2:03 PM Today</span>
										</div>
									</div>
									<div style={{ paddingTop: '20px' }}>
										<span>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industry's
											standard dummy text ever since the 1500s, when an unknown
											printer took a galley of type and scrambled it to make a
											type specimen book.
										</span>
									</div>
									<div className='options'>
										<div className='card'>
											<img src='/assets/instagram.svg' alt='' />
											Rachna Ranade
										</div>
										<div>
											<img src='/assets/Group18.svg' alt='' />
											<img src='/assets/hide.svg' alt='' />
											<img src='/assets/check.svg' alt='' />
										</div>
									</div>
								</div>
								<div className='feed-container'>
									<div style={{ display: 'flex', alignItems: 'center' }}>
										<img src='/assets/prof2.png' alt='' />
										<div
											style={{
												marginLeft: '10px',
												display: 'flex',
												flexDirection: 'column',
											}}>
											<span
												style={{
													color: '#5565B9',
													fontSize: '25px',
													fontWeight: '600',
												}}>
												Prayag Mukhi
											</span>
											<span>2:03 PM Today</span>
										</div>
									</div>
									<div style={{ paddingTop: '20px' }}>
										<span>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industry's
											standard dummy text ever since the 1500s, when an unknown
											printer took a galley of type and scrambled it to make a
											type specimen book.
										</span>
									</div>
									<div className='options'>
										<div className='card'>
											<img src='/assets/instagram.svg' alt='' />
											Rachna Ranade
										</div>
										<div>
											<img src='/assets/Group18.svg' alt='' />
											<img src='/assets/hide.svg' alt='' />
											<img src='/assets/check.svg' alt='' />
										</div>
									</div>
								</div>
								<div className='feed-container'>
									<div style={{ display: 'flex', alignItems: 'center' }}>
										<img src='/assets/prof2.png' alt='' />
										<div
											style={{
												marginLeft: '10px',
												display: 'flex',
												flexDirection: 'column',
											}}>
											<span
												style={{
													color: '#5565B9',
													fontSize: '25px',
													fontWeight: '600',
												}}>
												Prayag Mukhi
											</span>
											<span>2:03 PM Today</span>
										</div>
									</div>
									<div style={{ paddingTop: '20px' }}>
										<span>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industry's
											standard dummy text ever since the 1500s, when an unknown
											printer took a galley of type and scrambled it to make a
											type specimen book.
										</span>
									</div>
									<div className='options'>
										<div className='card'>
											<img src='/assets/instagram.svg' alt='' />
											Rachna Ranade
										</div>
										<div>
											<img src='/assets/Group18.svg' alt='' />
											<img src='/assets/hide.svg' alt='' />
											<img src='/assets/check.svg' alt='' />
										</div>
									</div>
								</div>
								<div className='feed-container'>
									<div style={{ display: 'flex', alignItems: 'center' }}>
										<img src='/assets/prof2.png' alt='' />
										<div
											style={{
												marginLeft: '10px',
												display: 'flex',
												flexDirection: 'column',
											}}>
											<span
												style={{
													color: '#5565B9',
													fontSize: '25px',
													fontWeight: '600',
												}}>
												Prayag Mukhi
											</span>
											<span>2:03 PM Today</span>
										</div>
									</div>
									<div style={{ paddingTop: '20px' }}>
										<span>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industry's
											standard dummy text ever since the 1500s, when an unknown
											printer took a galley of type and scrambled it to make a
											type specimen book.
										</span>
									</div>
									<div className='options'>
										<div className='card'>
											<img src='/assets/instagram.svg' alt='' />
											Rachna Ranade
										</div>
										<div>
											<img src='/assets/Group18.svg' alt='' />
											<img src='/assets/hide.svg' alt='' />
											<img src='/assets/check.svg' alt='' />
										</div>
									</div>
								</div>
							</div>
							<div className='rigth-info'>
								<div
									style={{
										padding: '15px',
										display: 'flex',
										alignItems: 'center',
									}}>
									<img
										src='/assets/stock.png'
										style={{ borderRadius: '50%' }}
										id='profile'
										alt=''
									/>
									<div
										style={{
											marginLeft: '10px',
											display: 'flex',
											flexDirection: 'column',
										}}>
										<span
											style={{
												color: '#5565B9',
												fontSize: '25px',
												fontWeight: '600',
											}}>
											Rachna Ranade
										</span>
										<span>2:03 PM Today</span>
									</div>
								</div>
								<div style={{ margin: '10px auto', width: '90%' }}>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</div>
								<img
									src='/assets/surgery.png'
									alt=''
									width='90%'
									style={{ display: 'flex', margin: '10px auto' }}
								/>
								<div className='reply'>
									<div className='reply-profile'>
										<div>
											<div style={{ display: 'flex', alignItems: 'center' }}>
												<img
													src='/assets/prof2.png'
													style={{
														width: '50px',
														height: '50px',
														objectFit: 'cover',
														borderRadius: '50%',
													}}
													alt=''
												/>
												<div
													style={{
														marginLeft: '15px',
														display: 'flex',
														flexDirection: 'column',
													}}>
													<span
														style={{
															color: '#5565B9',
															fontSize: '20px',
															fontWeight: '600',
														}}>
														Prayag Mukhi
													</span>
													<span style={{ fontSize: '15px' }}>
														2:03 PM Today
													</span>
												</div>
											</div>
										</div>
										<div className='reply-icon'>
											<img src='/assets/Group18.svg' alt='' />
											<img src='/assets/hide.svg' alt='' />
											<img src='/assets/check.svg' alt='' />
										</div>
									</div>
								</div>
								<div style={{ margin: '10px auto', width: '90%' }}>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
									<input id='reply-inp' placeholder='Write a reply..' />
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											marginBottom: '50px',
										}}>
										<div>
											<button
												className='reply-butn'
												style={{
													marginRight: '5px',
													color: 'blue',
													backgroundColor: '#F6F5F3',
												}}>
												Like
											</button>
											<button
												className='reply-butn'
												style={{ color: 'pink', backgroundColor: '#F6F5F3' }}>
												Ban
											</button>
										</div>
										<button
											className='reply-butn'
											style={{ color: 'white', backgroundColor: 'green' }}>
											Reply
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
