function jePalindrom(slovo) 
{
    const ocisteneSlovo = slovo.toLowerCase().replace(/[^a-zá-ž]/g, '');
    return ocisteneSlovo === ocisteneSlovo.split('').reverse().join('');
}

function kontrolaPalindromu() 
{
    const slovo = document.getElementById('wordInput').value;
    const vysledekElement = document.getElementById('result');
    
    if (jePalindrom(slovo)) 
    {
        vysledekElement.textContent = `${slovo} je palindrom.`;
    } else 
    {
        vysledekElement.textContent = `${slovo} není palindrom.`;
    }
}
