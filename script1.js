function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value - 1; // JavaScript months are 0-11
    const year = document.getElementById('year').value;

    if (!day || !month || !year) {
        document.getElementById('result').innerText = 'Please enter a valid date.';
        return;
    }

    const birthDate = new Date(year, month, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
}
