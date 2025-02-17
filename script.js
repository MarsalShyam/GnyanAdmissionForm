<<<<<<< HEAD
document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
        degree: document.getElementById('degree').value,
        year: document.getElementById('year').value,
        branch: document.getElementById('branch').value,
        name: document.getElementById('name').value,
        sex: document.getElementById('sex').value,
        guardianName: document.getElementById('guardianName').value,
        dob: document.getElementById('dob').value,
        address: document.getElementById('address').value,
        community: document.getElementById('community').value,
        parentIncome: document.getElementById('parentIncome').value,
        phoneNo: document.getElementById('phoneNo').value,
        mobileNo: document.getElementById('mobileNo').value,
        district: document.getElementById('district').value,
        state: document.getElementById('state').value,
        sslcMarks: document.getElementById('sslcMarks').value,
        category: document.getElementById('category').value,
        highestQualification: document.getElementById('highestQualification').value,
        examRegNo: document.getElementById('examRegNo').value,
        mediumOfStudy: document.getElementById('mediumOfStudy').value,
        mathsMarks: document.getElementById('mathsMarks').value,
        physicsMarks: document.getElementById('physicsMarks').value,
        chemistryMarks: document.getElementById('chemistryMarks').value,
        pcmPercentage: document.getElementById('pcmPercentage').value,
        cutOffMarks: document.getElementById('cutOffMarks').value,
    };

    // Send data to the Web App URL
    fetch('https://script.google.com/macros/s/AKfycbyRzjmbeq0LoivAq6xt7H_wB9QIF9cNdH6seo6zp3cJZgGv6p2RA_2LwF35Eo-QqVbJfA/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.text())
        .then(data => {
            alert('Data submitted successfully!');
            document.getElementById('studentForm').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the data.');
        });
=======
document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
        degree: document.getElementById('degree').value,
        year: document.getElementById('year').value,
        branch: document.getElementById('branch').value,
        name: document.getElementById('name').value,
        sex: document.getElementById('sex').value,
        guardianName: document.getElementById('guardianName').value,
        dob: document.getElementById('dob').value,
        address: document.getElementById('address').value,
        community: document.getElementById('community').value,
        parentIncome: document.getElementById('parentIncome').value,
        phoneNo: document.getElementById('phoneNo').value,
        mobileNo: document.getElementById('mobileNo').value,
        district: document.getElementById('district').value,
        state: document.getElementById('state').value,
        sslcMarks: document.getElementById('sslcMarks').value,
        category: document.getElementById('category').value,
        highestQualification: document.getElementById('highestQualification').value,
        examRegNo: document.getElementById('examRegNo').value,
        mediumOfStudy: document.getElementById('mediumOfStudy').value,
        mathsMarks: document.getElementById('mathsMarks').value,
        physicsMarks: document.getElementById('physicsMarks').value,
        chemistryMarks: document.getElementById('chemistryMarks').value,
        pcmPercentage: document.getElementById('pcmPercentage').value,
        cutOffMarks: document.getElementById('cutOffMarks').value,
    };

    // Send data to the Web App URL
    fetch('https://script.google.com/macros/s/AKfycbyRzjmbeq0LoivAq6xt7H_wB9QIF9cNdH6seo6zp3cJZgGv6p2RA_2LwF35Eo-QqVbJfA/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.text())
        .then(data => {
            alert('Data submitted successfully!');
            document.getElementById('studentForm').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the data.');
        });
>>>>>>> 349a3a9b15691a19a67245aaf77c1180493b39ae
});