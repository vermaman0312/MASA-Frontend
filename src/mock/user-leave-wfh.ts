export type myApprovalType = {
  userUniqueId: string;
  userName: string;
  requestedDate: string;
  type: string;
  FromDate: string;
  ToDate: string;
  numberOfDays: string;
  approvedBy: string;
  Status: string;
  reason: string;
};

export const myLeaveWfhList = [
  {
    userUniqueId: "20SOECE11091",
    userName: "Aman Verma",
    requestedDate: "20-12-1998",
    type: "Full Leave",
    FromDate: "12-02-1998",
    ToDate: "12-02-1995",
    numberOfDays: "01",
    approvedBy: "HOD",
    Status: "Approved",
    reason: "This is reason 1.",
  },
  {
    userUniqueId: "20SOECE11091",
    userName: "Aman Verma",
    requestedDate: "20-12-1998",
    type: "Half Leave",
    FromDate: "12-02-1998",
    ToDate: "12-02-1995",
    numberOfDays: "10",
    approvedBy: "HOD",
    Status: "Pending",
    reason: "This is reason 2.",
  },
  {
    userUniqueId: "20SOECE11091",
    userName: "Aman Verma",
    requestedDate: "20-12-1998",
    type: "WFH",
    FromDate: "12-02-1998",
    ToDate: "12-02-1995",
    numberOfDays: "05",
    approvedBy: "HOD",
    Status: "Pending",
    reason: "This is reason 5.",
  },
  {
    userUniqueId: "20SOECE11091",
    userName: "Aman Verma",
    requestedDate: "20-12-1998",
    type: "Full Leave",
    FromDate: "12-02-1998",
    ToDate: "12-02-1995",
    numberOfDays: "15",
    approvedBy: "HOD",
    Status: "Cancelled",
    reason: "This is reason 6.",
  },
  {
    userUniqueId: "20SOECE11091",
    userName: "Aman Verma",
    requestedDate: "20-12-1998",
    type: "WFH",
    FromDate: "12-02-1998",
    ToDate: "12-02-1995",
    numberOfDays: "10",
    approvedBy: "HOD",
    Status: "Cancelled",
    reason: "This is reason 7.",
  },
];
