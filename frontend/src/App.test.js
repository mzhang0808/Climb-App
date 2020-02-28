import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateCompetition from './components/CreateCompetition';
import JoinCompetition from './components/JoinCompetition';
import LogScores from './components/LogScores';
import ViewScores from './components/ViewScores';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Get Started');
  expect(linkElement).toBeInTheDocument();
});
const renderRoutes = path =>
		mount(
			<MemoryRouter initialEntries = {[path]} >
			 <Provider store = {configureStore()}>
				<Routes />
				</Provider>
				</MemoryRouter>
				);
it("renders home", () => {
		const component =renderRoutes("/");
		expect(component.find(Home)).toHaveLength(1);
});
it("renders login", () => {
			const component =renderRoutes("/login");
			expect(component.find(Login)).toHaveLength(1);
});
it("renders signup", () => {
			const component =renderRoutes("/signup");
			expect(component.find(Signup)).toHaveLength(1);
});



it("render create competition", () => {
			const component =renderRoutes("/competitions/create");
			expect(component.find(CreateCompetition)).toHaveLength(1);

});
it("render join competition", () => {
			const component =renderRoutes("/competitions/join");
			expect(component.find(JoinCompetition)).toHaveLength(1);
});
it("render log scores", () => {
			const component =renderRoutes("/scores/log");
			expect(component.find(LogScores)).toHaveLength(1);
});
it("render view scores", () => {
			const component =renderRoutes("/scores/view");
			expect(component.find(ViewScores)).toHaveLength(1);
});
