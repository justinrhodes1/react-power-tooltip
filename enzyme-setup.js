import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new Adapter() });
