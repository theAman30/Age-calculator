function age() {
  const d1 = parseInt(document.getElementById("date").value.trim());
  const m1 = parseInt(document.getElementById("month").value.trim());
  const y1 = parseInt(document.getElementById("year").value.trim());

  if (!d1 || !m1 || !y1) {
    document.getElementById("age").innerHTML =
      "Please enter your full date of birth.";
    return;
  }

  const birthDate = new Date(
    `${y1}-${String(m1).padStart(2, "0")}-${String(d1).padStart(
      2,
      "0"
    )}T00:00:00`
  );
  const today = new Date();

  if (birthDate > today) {
    document.getElementById("age").innerHTML =
      "Date of birth cannot be in the future.";
    return;
  }

  // Calculate Years, Months, Days
  let d2 = today.getDate(),
    m2 = today.getMonth() + 1,
    y2 = today.getFullYear();
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if ((y1 % 4 === 0 && y1 % 100 !== 0) || y1 % 400 === 0) monthDays[1] = 29;

  if (d1 > d2) {
    d2 += monthDays[(m2 - 2 + 12) % 12];
    m2--;
  }

  if (m1 > m2) {
    m2 += 12;
    y2--;
  }

  const years = y2 - y1;
  const months = m2 - m1;
  const days = d2 - d1;

  const ageText = `You are <strong>${years} years, ${months} months, ${days} days</strong> old.`;

  // Start live counter
  interval = setInterval(() => {
    const now = new Date();
    const diffMs = now - birthDate;

    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    const live = `
                <br><br>
                You've lived approximately:
                <ul class="mt-2 space-y-1 text-left text-gray-700 text-sm">
                  <li>📅 <strong>${totalDays}</strong> days</li>
                  <li>⏱️ <strong>${totalHours}</strong> hours</li>
                  <li>🕒 <strong>${totalMinutes}</strong> minutes</li>
                  <li>⏳ <strong>${totalSeconds}</strong> seconds</li>
                </ul>
              `;

    document.getElementById("age").innerHTML = ageText + live;
  }, 1000);
}
