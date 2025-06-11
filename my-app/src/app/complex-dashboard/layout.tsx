export default function ComplexDashboardLayout ({
	children,
	users,
	revenue,
	notifications,
	login,
}:{
	children: React.ReactNode;
	users: React.ReactNode;
	revenue: React.ReactNode;
	notifications: React.ReactNode;
	login: React.ReactNode;
}) {
	const isLoggedIn = true;
	return isLoggedIn? (
		<>
			<div>{children}</div> {/* Content from page.tsx*/}
			<div style={{display: 'flex'}}>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					{users}
					{revenue}
				</div>
				<div style={{display: 'flex', flex: 1}}>
					{notifications}
				</div>
			</div>
		</>
		): (
			login
	)
}