const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('.').map(Number)
  return { day, month, year }
};

const parsedDate1 = parseDate('10.10.1992')
const parsedDate2 = parseDate('08.12.2022')
const userDate = prompt("Zadej datum ve formátu DD.MM.YYYY:")
const parsedDate3 = parseDate(userDate)

document.body.innerHTML += `Day: ${parsedDate1.day}, Month: ${parsedDate1.month}, Year: ${parsedDate1.year}<br>`
document.body.innerHTML += `Day: ${parsedDate2.day}, Month: ${parsedDate2.month}, Year: ${parsedDate2.year}<br>`
document.body.innerHTML += `Day: ${parsedDate3.day}, Month: ${parsedDate3.month}, Year: ${parsedDate3.year}`
