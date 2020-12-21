import Company from "./Company";
import CustomMap from "./CustomMap";
import User from "./User";
const user = new User();
const company = new Company()
const marketUser = new CustomMap('map');
marketUser.addMarket(user)
marketUser.addMarket(company);