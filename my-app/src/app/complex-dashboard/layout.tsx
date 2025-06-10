import UserAnalytics from "./@users/page";
import RevenueMetrics from './@revenue/page';
import Notifications from './@notifications/page';

export default function ComplexDashboardLayout ({
	children,
	users,
	revenue,
	notifications
}:{
	children: React.ReactNode;
	users: React.ReactNode;
	revenue: React.ReactNode;
	notifications: React.ReactNode
}) {
	return (
		<>
			<div>{children}</div> {/* Content from page.tsx*/}
			<div style={{display: 'flex'}}>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<UserAnalytics/>
					<RevenueMetrics/>
				</div>
				<div style={{display: 'flex', flex: 1}}>
					<Notifications/>
				</div>
			</div>
		</>
	)
}