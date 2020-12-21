import Company from "./Company";
import CustomMap from "./CustomMap";
import User from "./User";
const customMap =  new CustomMap('map');
const user = new User();
const company = new Company();
customMap.addObj(company)