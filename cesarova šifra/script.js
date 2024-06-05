function encrypt() 
{
  var inputText = document.getElementById("inputText").value;
  var key = parseInt(document.getElementById("key").value);
  var outputText = "";

  for (var i = 0; i < inputText.length; i++) 
  {
    var charCode = inputText.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) 
    {
      outputText += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) 
    {
      outputText += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
    } else 
    {
      outputText += inputText.charAt(i);
    }
  }

  document.getElementById("outputText").value = outputText;
}