import { TestBed } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";

import { EmployeeService } from "./employee.service";
import { from } from "rxjs";

describe("EmployeeService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
});
