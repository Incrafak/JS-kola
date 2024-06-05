const morseCodes = 
{
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
};

function encode() 
{
    const input = document.getElementById("input").value.toUpperCase();
    let output = "";
    for (let i = 0; i < input.length; i++) 
    {
        if (input[i] === ' ') 
        {
            output += '/';
        } else if (morseCodes[input[i]]) 
        {
            output += morseCodes[input[i]] + "/";
        }
    }
    if (output.length > 0) 
    {
        output += "/";
    }
    document.getElementById("output").value = output.trim();
}

function decode() 
{
    const input = document.getElementById("input").value.trim().split("/");
    let output = "";
    for (let i = 0; i < input.length; i++) 
    {
        for (let char in morseCodes) 
        {
            if (morseCodes[char] === input[i]) 
            {
                output += char;
                break;
            }
        }
        output += ' ';
    }
    document.getElementById("output").value = output.trim();
}
