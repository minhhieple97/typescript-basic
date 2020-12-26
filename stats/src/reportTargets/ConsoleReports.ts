import { OutputTarget } from "../Summary";
export  class ConsoleReports implements OutputTarget  {
    print(report:string){
      console.log(report)
    }
}
