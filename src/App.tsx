import { css } from '@emotion/react';

function App() {
	return (
		<div
			css={css`
				width: 100%;
				height: 100%;

				background-color: black;
			`}
		>
			<h1
				css={css`
					display: flex;
					justify-content: center;
					align-items: center;

					height: 100%;

					color: white;
					font-family: 'Inter', 'sans-serif';
					font-weight: 700;
					font-size: 3rem;
					text-align: center;
				`}
			>
				{'Hi!'}
				<br />
				{"I'm Shashank"}
			</h1>
		</div>
	);
}

export default App;
