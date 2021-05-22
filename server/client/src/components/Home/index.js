import HomeController from './HomeController';
import requireAuth from '../../hoc/requireLogin';

export default requireAuth(HomeController);
