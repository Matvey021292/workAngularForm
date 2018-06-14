import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Employee} from './employee.model';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class EmployeeService {
    employeeList: AngularFireList<any>;
    selectedEmployee: Employee = new Employee();

    constructor(private firebase: AngularFireDatabase, private tostr: ToastrService) {
    }

    getData() {
        this.employeeList = this.firebase.list('employees');
        return this.employeeList;
    }

    insertEmployee(employee: Employee) {
        this.employeeList.push({
            urlname: employee.urlname,
            login: employee.login,
            password: employee.password,
            image: employee.image,
        });
    }

    updateEmployee(employee: Employee) {
        this.employeeList.update(employee.$key, {
            urlname: employee.urlname,
            login: employee.login,
            password: employee.password,
            image: employee.image,
        });
    }

    deleteEmployee($key: string) {
        this.employeeList.remove($key);

    }

}
