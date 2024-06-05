function isPrime(num) 
{
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) 
    {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", function() 
{
    const generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", function() 
    {
        const numberInput = document.getElementById("numberInput").value;
        const primeTableDiv = document.getElementById("primeTable");

        let primes = [];
        let number = parseInt(numberInput);

        if (isNaN(number) || number < 2) 
        {
            primeTableDiv.innerHTML = "Zadejte platné číslo větší než 1.";
            return;
        }

        let counter = 1;
        let currentNumber = 2;
        while (currentNumber < number) 
        {
            if (isPrime(currentNumber)) 
            {
                primes.push(currentNumber);
            }
            currentNumber++;
        }

        let tableHTML = "<table><tr><th>Pořadí</th><th>Prvočíslo</th></tr>";
        primes.forEach((prime, index) => 
        {
            tableHTML += `<tr><td>${index + 1}.</td><td>${prime}</td></tr>`;
        });
        tableHTML += "</table>";

        primeTableDiv.innerHTML = tableHTML;
    });
});
