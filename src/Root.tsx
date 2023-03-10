import {Still} from 'remotion';
import {PreviewCard} from './PreviewCard';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Still
				id="PreviewCard"
				component={PreviewCard}
				width={1200}
				height={627}
				defaultProps={{
					title: 'Welcome to Remotion',
					description: 'Edit Video.tsx to change template',
					slogan: 'Make videos\nprogrammatically',
				}}
			/>
		</>
	);
};
