let patients = [];
let doctors = [];
let appointments = [];
let bills = [];

function admitPatients(id, firstName, lastName, age, gender, disease) {
    let patient = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        disease: disease,
        medicalHistory: [],
        isAdmittedBefore: false
    };

    patients.push(patient);
    return patient;
}

function medicalRecords(patientID, record) {
    let patient = patients.find(p => p.id === patientID);

    if (patient) {
        patient.medicalHistory.push(record);
    }
}

function groupOfDoctors(id, firstName, lastName, experience, specialization, shift) {
    let doctor = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        experience: experience,
        specialization: specialization,
        shift: shift,
        patients: []
    };

    doctors.push(doctor);
    return doctor;
}

function setAppointment(id, patientID, doctorID, roomNum, date, time) {
    let meeting = {
        id: id,
        patientID: patientID,
        doctorID: doctorID,
        roomNum: roomNum,
        date: date,
        time: time,
        status: "Scheduled"
    };

    appointments.push(meeting);

    let doctor = doctors.find(a => a.id === doctorID);
    let patient = patients.find(b => b.id === patientID);

    if (doctor && patient) {
        doctor.patients.push(patient);
    }

    return meeting;   // fixed
}

function billing(
    id,
    patientID,
    doctorID,
    date,
    time,
    consultancyFees,
    medicineFees,
    miscellaneous
) {
    let bill = {
        id: id,
        patientID: patientID,
        doctorID: doctorID,
        date: date,
        time: time,
        consultancyFees: consultancyFees,
        medicineFees: medicineFees,
        miscellaneous: miscellaneous,
        isPaid: false
    };

    bills.push(bill);
    return bill;
}

function totalBill(bill) {
    return bill.consultancyFees +
           bill.medicineFees +
           bill.miscellaneous;
}

function processPayment(bill) {
    bill.isPaid = true;

    return "Payment of Rs " +
           totalBill(bill) +
           " processed successfully.";
}

function patientRecord(patientID) {
    let patient = patients.find(p => p.id === patientID);

    let patientAppointments =
        appointments.filter(a => a.patientID === patientID);

    let patientBills =
        bills.filter(b => b.patientID === patientID);

    return {
        patient: patient,
        appointments: patientAppointments,
        bills: patientBills
    };
}

// ---------------- DEMO ----------------

groupOfDoctors(
    "Dr1",
    "Arpita",
    "Namdev",
    2,
    "Surgeon",
    "Morning"
);

admitPatients(
    "P1",
    "Devansh",
    "Meena",
    20,
    "Male",
    "Malaria"
);

medicalRecords(
    "P1",
    {
        date: "2026-06-15",
        notes: "BP 140/90, prescribed medicines"
    }
);

setAppointment(
    "A1",
    "P1",
    "Dr1",
    101,
    "2026-06-20",
    "10:00 AM"
);

let bill1 = billing(
    "B1",
    "P1",
    "Dr1",
    "2026-06-20",
    "12:00 PM",
    800,
    250,
    100
);

console.log(patientRecord("P1"));

console.log(processPayment(bill1));


groupOfDoctors(
    "D2",
    "Sakshi",
    "Lodhi",
    2,
    "Surgeon",
    "Evening"
);

admitPatients(
    "P2",
    "Vidit",
    "Dangi",
    20,
    "Male",
    "Covid"
);

medicalRecords(
    "P2",
    {
        date: "2026-06-15",
        notes: "BP 140/90, prescribed medicines"
    }
);

setAppointment(
    "A2",
    "P2",
    "Dr2",
    102,
    "2026-06-20",
    "10:00 AM"
);

let bill2 = billing(
    "B2",
    "P2",
    "Dr2",
    "2026-06-20",
    "12:00 PM",
    800,
    250,
    100
);

console.log(patientRecord("P2"));

console.log(processPayment(bill2));