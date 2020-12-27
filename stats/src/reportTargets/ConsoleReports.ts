import { OutputTarget } from "../Summary";
  class ConsoleReports implements OutputTarget  {
    print(report:string){
      console.log(report)
    }
}
export default ConsoleReports